import { ethers } from 'ethers';
import { BaseClient } from './base';
import {
  BulkCreateContributionMutationVariables,
  CreateContributionMutationVariables,
  ListContributionsQuery,
  ListContributionsQueryVariables,
  UpdateContributionMutationVariables,
} from '../protocol-types';
import {
  AttestArgs,
  GovrnContract,
  MintArgs,
  NetworkConfig,
} from '@govrn/govrn-contract-client';
import { GraphQLClient } from 'graphql-request';
import { paginate } from '../utils';

const REQUIRED_CONFIRMATIONS = 1;
const ERROR_CHAIN_ID = 'Failed to fetch on chain Id';

export class Contribution extends BaseClient {
  status: ContributionStatus;

  constructor(client: GraphQLClient) {
    super(client);
    this.status = new ContributionStatus(this.client);
  }

  public async get(id: number) {
    const contribution = await this.sdk.getContribution({ where: { id } });
    return contribution.result;
  }

  public async list(args: ListContributionsQueryVariables) {
    return paginate<ListContributionsQueryVariables, ListContributionsQuery>(
      this.sdk.listContributions,
      args,
    );
  }

  public async create(args: CreateContributionMutationVariables) {
    const contributions = await this.sdk.createContribution(args);
    return contributions.createContribution;
  }

  /**
   * This method deletes the contribution from the db.
   * if minted, it burns the contribution.
   *
   * @param networkConfig
   * @param signer
   * @param id contribution id
   */
  public async delete(
    networkConfig: NetworkConfig,
    signer: ethers.Signer,
    id: number,
  ) {
    const contract = new GovrnContract(networkConfig, signer);

    const contribution = await this.get(id);
    if (!contribution) {
      throw Error(`Contribution doesn't exist: ${id}`);
    }

    // TODO: Can we avoid hardcoding the event name
    if (contribution?.status.name === 'minted' && contribution.on_chain_id) {
      const transaction = await contract.burnContribution({
        tokenId: contribution.on_chain_id,
      });
      await transaction.wait(REQUIRED_CONFIRMATIONS);
    }

    return await this.sdk.deleteContribution({ where: { contributionId: id } });
  }

  public async bulkCreate(args: BulkCreateContributionMutationVariables) {
    const mutation = await this.sdk.bulkCreateContribution(args);
    return mutation.createManyContribution.count;
  }

  public async update(args: UpdateContributionMutationVariables) {
    const contributions = await this.sdk.updateContribution(args);
    return contributions.updateContribution;
  }

  public async bulkMint(
    networkConfig: NetworkConfig,
    signer: ethers.Signer,
    address: string,
    contributions: {
      id: number;
      activityTypeId: number;
      userId: number;
      args: MintArgs;
      name: Uint8Array;
      details: Uint8Array;
      proof: Uint8Array;
    }[],
  ) {
    const contract = new GovrnContract(networkConfig, signer);
    const args = {
      contributions: contributions.map(c => ({
        contribution: {
          owner: address,
          detailsUri: c.args.detailsUri,
          dateOfSubmission: c.args.dateOfSubmission,
          dateOfEngagement: c.args.dateOfEngagement,
        },
      })),
    };
    const transaction = await contract.bulkMint(args);
    const transactionReceipt = await transaction.wait(REQUIRED_CONFIRMATIONS);

    const onChainIds: { [index: number]: ethers.BigNumber | null } =
      transactionReceipt.logs
        .map(l => {
          console.log('on chain id (logs)', l);
          return contract.govrn.interface.parseLog(l);
        })
        .reduce(
          (prev, current, idx) => ({
            ...prev,
            [idx]: current.name === 'Mint' ? current.args['id'] : null,
          }),
          {},
        );

    return await Promise.allSettled(
      contributions.map(async (c, idx) => {
        const onChainId = onChainIds[idx];

        // TODO: Should we store it anyway as `staged` contribution?
        if (!onChainId) {
          throw new Error(ERROR_CHAIN_ID);
        }

        if (c.id) {
          return await this._updateUserOnChainContribution({
            ...c,
            onChainId: onChainId?.toNumber() as number,
            txHash: transaction.hash,
          });
        }

        return await this._createOnChainUserContribution({
          ...c,
          onChainId: onChainId?.toNumber() as number,
          txHash: transaction.hash,
        });
      }),
    );
  }

  public async mint(
    networkConfig: NetworkConfig,
    signer: ethers.Signer,
    address: string,
    id: number,
    activityTypeId: number,
    userId: number,
    args: MintArgs,
    name: Uint8Array,
    details: Uint8Array,
    proof: Uint8Array,
  ) {
    const contract = new GovrnContract(networkConfig, signer);
    const transaction = await contract.mint(args);
    const transactionReceipt = await transaction.wait(REQUIRED_CONFIRMATIONS);

    let onChainId = null as null | ethers.BigNumber;
    const logs = transactionReceipt.logs;
    for (const log of logs) {
      console.log('on chain id (logs)', log);
      const decodedLog = contract.govrn.interface.parseLog(log);
      // TODO: Can we avoid hardcoding the event name
      if (decodedLog.name === 'Mint') {
        onChainId = decodedLog.args['id'];

        break;
      }
    }
    if (!onChainId) {
      throw Error(ERROR_CHAIN_ID);
    }

    if (id) {
      return await this._updateUserOnChainContribution({
        id,
        name,
        activityTypeId,
        args,
        details,
        proof,
        userId,
        onChainId: onChainId?.toNumber() as number,
        txHash: transaction.hash,
      });
    }

    return await this._createOnChainUserContribution({
      name,
      details,
      activityTypeId,
      args,
      proof,
      userId,
      onChainId: onChainId?.toNumber() as number,
      txHash: transaction.hash,
    });
  }

  public async attest(
    networkConfig: NetworkConfig,
    signer: ethers.Signer,
    id: number,
    activityTypeId: number,
    userId: number,
    args: AttestArgs,
  ) {
    const contract = new GovrnContract(networkConfig, signer);
    const transaction = await contract.attest(args);
    await transaction.wait(REQUIRED_CONFIRMATIONS);

    if (id) {
      // TODO: figure out this flow a little bit
      return;
      // return await this.sdk.updateUserOnChainAttestation({
      //   data: {
      //     confidence: args.confidence.toString(),
      //     contributionOnChainId: parseInt(args.contribution.toString()),
      //     userId: userId,
      //     id: id,
      //   },
      // });
    }
    return await this.sdk.createUserOnChainAttestation({
      data: {
        confidence: args.confidence.toString(),
        contributionOnChainId: parseInt(args.contribution.toString()),
        userId: userId,
      },
    });
  }

  private async _updateUserOnChainContribution(contribution: {
    id: number;
    activityTypeId: number;
    userId: number;
    args: MintArgs;
    name: Uint8Array;
    details: Uint8Array;
    proof: Uint8Array;
    txHash: string;
    onChainId: number;
  }) {
    console.log('id in the update:', contribution.id);
    const updateResponse = this.sdk.updateUserOnChainContribution({
      data: {
        name: ethers.utils.toUtf8String(contribution.name),
        details: ethers.utils.toUtf8String(contribution.details),
        dateOfSubmission: new Date(
          contribution.args.dateOfSubmission,
        ).toString(),
        dateOfEngagement: new Date(
          contribution.args.dateOfEngagement,
        ).toString(),
        proof: ethers.utils.toUtf8String(contribution.proof),
        status: 'minted',
        onChainId: contribution.onChainId,
        userId: contribution.userId,
        id: contribution.id,
        txHash: contribution.txHash,
      },
    });
    console.log('update response:', updateResponse);
    return updateResponse;
  }

  private async _createOnChainUserContribution(contribution: {
    activityTypeId: number;
    userId: number;
    args: MintArgs;
    name: Uint8Array;
    details: Uint8Array;
    proof: Uint8Array;
    onChainId: number;
    txHash: string;
  }) {
    return await this.sdk.createOnChainUserContribution({
      data: {
        name: ethers.utils.toUtf8String(contribution.name),
        details: ethers.utils.toUtf8String(contribution.details),
        activityTypeId: contribution.activityTypeId,
        dateOfSubmission: new Date(
          contribution.args.dateOfSubmission,
        ).toString(),
        dateOfEngagement: new Date(
          contribution.args.dateOfEngagement,
        ).toString(),
        proof: ethers.utils.toUtf8String(contribution.proof),
        status: 'minted',
        userId: contribution.userId,
        onChainId: contribution.onChainId,
        txHash: contribution.txHash,
      },
    });
  }
}

export class ContributionStatus extends BaseClient {
  public async get(name: string) {
    const contributions = await this.sdk.getContributionStatus({ name: name });
    if (contributions.contributionStatuses.length) {
      return contributions.contributionStatuses[0];
    }
    return { id: 0, name: '' };
  }
}
