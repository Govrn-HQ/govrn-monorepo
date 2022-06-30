import { ethers } from 'ethers';
import { BaseClient } from './base';
import { Attestation } from './attestation';
import {
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

export class Contribution extends BaseClient {
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

  // public async bulkCreate(args: BulkCreateContributionMutationVariables) {
  public async bulkCreate(args: any) {
    // very temporary change to build
    const mutation = await this.sdk.bulkCreateContribution(args);
    return mutation.createManyContribution.count;
  }

  public async update(args: UpdateContributionMutationVariables) {
    const contributions = await this.sdk.updateContribution(args);
    return contributions.updateContribution;
  }

  public async mint(
    networkConfig: NetworkConfig,
    provider: ethers.providers.Provider,
    address: string,
    id: number,
    activityTypeId: number,
    userId: number,
    args: MintArgs,
    name: string,
    details: string,
    proof: string
  ) {
    const contract = new GovrnContract(networkConfig, provider);
    const transaction = await contract.mint(args);
    await transaction.wait(1);

    // let onChainId = null;
    // const logs = transactionReceipt.logs;
    // for (const log of logs) {
    //   console.log('on chain id (logs)', log);
    //   const decodedLog = contract.govrn.interface.parseLog(log);
    //   // TODO: Can we avoid hardcoding the event name
    //   if (decodedLog.name === 'Mint') {
    //     onChainId = decodedLog.args['id'];

    //     break;
    //   }
    // }
    // if (!onChainId) {
    //   throw Error('Failed to fetch on chain Id');
    // }
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
          onChainId: id,
          userId: userId,
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
        onChainId: id,
      },
    });
  }

  public async attest(
    networkConfig: NetworkConfig,
    provider: ethers.providers.Provider,
    id: number,
    activityTypeId: number,
    userId: number,
    args: AttestArgs
  ) {
    const contract = new GovrnContract(networkConfig, provider);
    const transaction = await contract.attest(args);
    await transaction.wait(1);

    if (id) {
      return await this.sdk.updateUserOnChainAttestation({
        data: {
          confidence: args.confidence.toString(),
          contributionOnChainId: parseInt(args.contribution.toString()),
          userId: userId,
          id: id,
        },
      });
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
