import { ethers } from 'ethers';
import { BaseClient } from './base';
import {
  CreateContributionMutationVariables,
  ListContributionsQueryVariables,
  UpdateContributionMutationVariables,
} from '../protocol-types';
import { GovrnContract, MintArgs } from '@govrn/govrn-contract-client';

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

  public async update(args: UpdateContributionMutationVariables) {
    const contributions = await this.sdk.updateContribution(args);
    return contributions.updateContribution;
  }
  // two situations
  // 1. contribution exists
  // 2. contribution does not exist
  //
  // check if id is supplied
  public async mint(
    chainId: number,
    provider: ethers.providers.Provider,
    id: number,
    args: MintArgs
  ) {
    // mint with contract
    const contract = new GovrnContract(chainId, provider);
    const transaction = await contract.mint(args);
    await transaction.wait(10);
    // select partners
    if (id) {
      this.update({
        data: {
          name: { set: args.name.toString() },
          details: { set: args.details.toString() },
          date_of_submission: {
            set: new Date(args.dateOfSubmission.toString()),
          },
          date_of_engagement: {
            set: new Date(args.dateOfEngagement.toString()),
          },
          proof: {
            set: args.proof.toString(),
          },
          // partners: {
          // 	set:
          // }
        },
        where: { id },
      });
    }
  }
}
