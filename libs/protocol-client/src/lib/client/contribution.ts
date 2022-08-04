import { ethers } from 'ethers';
import { BaseClient } from './base';
import {
  BulkCreateContributionMutationVariables,
  CreateContributionMutationVariables,
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
    const contributions = await this.sdk.listContributions(args);
    return contributions.result;
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
   * @param provider
   * @param id contribution id
   */
  public async delete(
    networkConfig: NetworkConfig,
    signer: ethers.Signer,
    id: number
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
      await transaction.wait(1);
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
    proof: Uint8Array
  ) {
    const contract = new GovrnContract(networkConfig, signer);
    const transaction = await contract.mint(args);
    const transactionReceipt = await transaction.wait(1);

    let onChainId = null;
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
      throw Error('Failed to fetch on chain Id');
    }
    if (id) {
      console.log('id in the update:', id);
      const updateResponse = await this.sdk.updateUserOnChainContribution({
        data: {
          name: ethers.utils.toUtf8String(name),
          details: ethers.utils.toUtf8String(details),
          dateOfSubmission: new Date(args.dateOfSubmission).toString(),
          dateOfEngagement: new Date(args.dateOfEngagement).toString(),
          proof: ethers.utils.toUtf8String(proof),
          status: 'minted',
          onChainId: onChainId.toNumber(),
          userId: userId,
          id: id,
          txHash: transaction.hash,
        },
      });
      console.log('update response:', updateResponse);
      return updateResponse;
    }
    return await this.sdk.createOnChainUserContribution({
      data: {
        name: ethers.utils.toUtf8String(name),
        details: ethers.utils.toUtf8String(details),
        activityTypeId: activityTypeId,
        dateOfSubmission: new Date(args.dateOfSubmission).toString(),
        dateOfEngagement: new Date(args.dateOfEngagement).toString(),
        proof: ethers.utils.toUtf8String(proof),
        status: 'minted',
        userId: userId,
        onChainId: onChainId.toNumber(),
      },
    });
  }

  public async attest(
    networkConfig: NetworkConfig,
    signer: ethers.Signer,
    id: number,
    activityTypeId: number,
    userId: number,
    args: AttestArgs
  ) {
    const contract = new GovrnContract(networkConfig, signer);
    const transaction = await contract.attest(args);
    await transaction.wait(1);

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
