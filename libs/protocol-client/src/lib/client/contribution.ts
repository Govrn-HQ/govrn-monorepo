import { BigNumber, ethers } from 'ethers';
import { BaseClient } from './base';
import {
  BulkCreateContributionMutationVariables,
  CreateContributionMutationVariables,
  ListContributionsQuery,
  ListContributionsQueryVariables,
  UpdateContributionMutationVariables,
  UpsertContributionMutationVariables,
} from '../protocol-types';
import {
  AttestArgs,
  GovrnContract,
  MintArgs,
  NetworkConfig,
} from '@govrn/govrn-contract-client';
import { GraphQLClient } from 'graphql-request';
import { paginate } from '../utils/paginate';
import { batch } from '../utils/batch';
// noinspection ES6PreferShortImport
import { ChainIdError } from '../utils/errors';

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
    const contributions = await this.sdk.createOneContribution(args);
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
      await transaction.wait();
    }

    return await this.sdk.deleteUserContribution({
      where: { contributionId: id },
    });
  }

  public async deleteStaging(id: number) {
    return await this.sdk.deleteContribution({ where: { id: id } });
  }

  public async bulkCreate(args: BulkCreateContributionMutationVariables) {
    const mutation = await this.sdk.bulkCreateContribution(args);
    return mutation.createManyContribution.count;
  }

  public async update(args: UpdateContributionMutationVariables) {
    const contributions = await this.sdk.updateOneContribution(args);
    return contributions.updateContribution;
  }

  public async upsert(args: UpsertContributionMutationVariables) {
    return await this.sdk.upsertContribution(args);
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
    const chainId = await signer.getChainId();
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
    const transactionReceipt = await transaction.wait();

    const onChainIds: { [index: number]: ethers.BigNumber | null } =
      transactionReceipt.logs.reduce((prev, current, idx) => {
        const log = contract.govrn.interface.parseLog(current);
        return {
          ...prev,
          [idx]: log.name === 'Mint' ? log.args['id'] : null,
        };
      }, {});

    return await batch(contributions, async (c, idx) => {
      const onChainId = onChainIds[idx];

      // TODO: Should we store it anyway as `staged` contribution?
      if (!onChainId) {
        throw new ChainIdError();
      }
      if (c.id) {
        return await this._updateUserOnChainContribution({
          ...c,
          onChainId: onChainId?.toNumber(),
          txHash: transaction.hash,
          chainId,
        });
      }

      return await this._createOnChainUserContribution({
        ...c,
        onChainId: onChainId?.toNumber(),
        txHash: transaction.hash,
        chainId,
      });
    });
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
    const chainId = await signer.getChainId();
    const contract = new GovrnContract(networkConfig, signer);
    const transaction = await contract.mint(args);
    await this.sdk.updateUserOnChainContribution({
      id: id,
      status: 'pending',
      chainId,
      data: {
        tx_hash: { set: transaction.hash },
      },
    });

    const transactionReceipt = await transaction.wait();

    let onChainId = null as null | ethers.BigNumber;
    const logs = transactionReceipt.logs;
    for (const log of logs) {
      const decodedLog = contract.govrn.interface.parseLog(log);
      // TODO: Can we avoid hardcoding the event name
      if (decodedLog.name === 'Mint') {
        onChainId = decodedLog.args['id'];

        break;
      }
    }
    if (!onChainId) {
      throw new ChainIdError();
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
        chainId,
        onChainId: onChainId?.toNumber(),
        txHash: transaction.hash,
      });
    }

    return await this._createOnChainUserContribution({
      name,
      details,
      activityTypeId,
      args,
      proof,
      chainId,
      userId,
      onChainId: onChainId?.toNumber(),
      txHash: transaction.hash,
    });
  }

  public async attest(
    networkConfig: NetworkConfig,
    signer: ethers.Signer,
    id: number,
    userId: number,
    args: AttestArgs,
    chainId: number,
  ) {
    const contr = await this.get(id);
    if (!contr || !contr.chain || chainId !== Number(contr.chain.chain_id)) {
      throw new Error(
        `Contribution was minted on chain ${contr?.chain?.chain_id || null}`,
      );
    }
    const contract = new GovrnContract(networkConfig, signer);
    const transaction = await contract.attest(args);

    const createdAttestation = await this.sdk.createUserOnChainAttestation({
      data: {
        confidence: args.confidence.toString(),
        contributionOnChainId: parseInt(args.contribution.toString()),
        chainId: chainId,
        userId: userId,
      },
    });

    await this.sdk.updateUserOnChainAttestation({
      id: createdAttestation.createUserOnChainAttestation.id,
      status: 'pending',
      data: {},
    });

    await transaction.wait();
    await this.sdk.updateUserOnChainAttestation({
      id: createdAttestation.createUserOnChainAttestation.id,
      status: 'attested',
      data: {},
    });
    return createdAttestation;
  }

  public async bulkAttest(
    networkConfig: NetworkConfig,
    signer: ethers.Signer,
    chainId: number,
    userId: number,
    data: {
      contribution: number;
      confidenceId: number;
      confidenceName: string;
      dateOfSubmission: number;
    }[],
  ) {
    const contributionIds = [];
    const simpleContributions = [];
    for (const c of data) {
      contributionIds.push(c.contribution);
      simpleContributions.push({
        contribution: c.contribution,
        confidence: c.confidenceId,
        dateOfSubmission: c.dateOfSubmission,
      });
    }
    const signerChainId = await signer.getChainId();
    const dbContributions = await this.list({
      where: {
        chain: { is: { chain_id: { equals: `${chainId}` } } },
        on_chain_id: { in: contributionIds },
      },
    });
    if (dbContributions.result.length !== contributionIds.length) {
      throw new Error(
        `Some/all contributions are not on chain id ${signerChainId}`,
      );
    }
    const args = {
      attestations: simpleContributions,
    };

    const contract = new GovrnContract(networkConfig, signer);
    const transaction = await contract.bulkAttest(args);
    const transactionReceipt = await transaction.wait();

    const logs: {
      index: number;
      contributionId: number;
      confidence: number;
    }[] = [];
    for (const [index, l] of transactionReceipt.logs.entries()) {
      const log = contract.govrn.interface.parseLog(l);
      if (log.name === 'Attest') {
        logs.push({
          index,
          contributionId: (log.args['contribution'] as BigNumber).toNumber(),
          confidence: log.args['confidence'],
        });
      }
    }

    return await batch(logs, async log => {
      return await this.sdk.createUserOnChainAttestation({
        data: {
          contributionOnChainId: log.contributionId,
          confidence: data[log.index].confidenceName,
          chainId: chainId,
          userId: userId,
        },
      });
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
    chainId: number;
    txHash: string;
    onChainId: number;
  }) {
    const { args, name, details, proof, onChainId, id, txHash, chainId } =
      contribution;
    return await this.sdk.updateUserOnChainContribution({
      id: id,
      status: 'minted',
      chainId: chainId,
      data: {
        name: { set: ethers.utils.toUtf8String(name) },
        details: { set: ethers.utils.toUtf8String(details) },
        date_of_submission: { set: new Date(args.dateOfSubmission).toString() },
        date_of_engagement: { set: new Date(args.dateOfSubmission).toString() },
        proof: { set: ethers.utils.toUtf8String(proof) },
        on_chain_id: { set: onChainId },
        tx_hash: { set: txHash },
      },
    });
  }

  private async _createOnChainUserContribution(contribution: {
    activityTypeId: number;
    userId: number;
    args: MintArgs;
    name: Uint8Array;
    details: Uint8Array;
    proof: Uint8Array;
    chainId: number;
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
        chainId: contribution.chainId,
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
