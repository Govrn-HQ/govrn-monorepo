import { ethers } from 'ethers';
import { BaseClient } from './base';
import { Attestation } from './attestation';
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
    console.log('is minting', args);
    const contract = new GovrnContract(networkConfig, provider);
    const transaction = await contract.mint(args);
    const transactionReceipt = await transaction.wait(1);
    console.log('transactionReceipt', transactionReceipt);

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
    // if (id) {
    //   console.log('id in the update:', id);
    //   const updateResponse = await this.update({
    //     data: {
    //       name: { set: ethers.utils.toUtf8String(name) },
    //       details: { set: ethers.utils.toUtf8String(details) },
    //       date_of_submission: {
    //         set: new Date(args.dateOfSubmission).toString(),
    //       },
    //       date_of_engagement: {
    //         set: new Date(args.dateOfEngagement).toString(),
    //       },
    //       proof: {
    //         set: ethers.utils.toUtf8String(proof),
    //       },
    //       status: {
    //         connect: { name: 'minted' },
    //       },
    //       on_chain_id: {
    //         set: id,
    //       },
    //     },
    //     where: { id },
    //   });
    //   console.log('update response:', updateResponse);
    //   return updateResponse;
    // }
    // return this.create({
    //   data: {
    //     activity_type: { connect: { id: activityTypeId } },
    //     name: name,
    //     details: details,
    //     date_of_submission: new Date(args.dateOfSubmission).toString(),
    //     date_of_engagement: new Date(args.dateOfEngagement).toString(),
    //     proof: proof,
    //     status: {
    //       connect: { name: 'minted' },
    //     },
    //     user: { connect: { id: userId } },
    //     on_chain_id: id,
    //   },
    // });
  }

  public async attest(
    networkConfig: NetworkConfig,
    provider: ethers.providers.Provider,
    id: number,
    activityTypeId: number,
    userId: number,
    args: AttestArgs
  ) {
    const attestCrud = new Attestation(this.client);
    console.log('attesting');
    const contract = new GovrnContract(networkConfig, provider);
    const transaction = await contract.attest(args);
    const transactionReceipt = await transaction.wait(10);
    console.log('transactionReceipt', transactionReceipt);

    // if (id) {
    //   return await attestCrud.update({
    //     data: {
    //       confidence: { connect: { name: args.confidence.toString() } },
    //       contribution: {
    //         connect: { on_chain_id: parseInt(args.contribution.toString()) },
    //       },
    //     },
    //     where: { id },
    //   });
    // }
    // return attestCrud.create({
    //   data: {
    //     confidence: { connect: { name: args.confidence.toString() } },
    //     contribution: {
    //       connect: { on_chain_id: parseInt(args.contribution.toString()) },
    //     },
    //     user: { connect: { id: userId } },
    //   },
    // });
  }
}
