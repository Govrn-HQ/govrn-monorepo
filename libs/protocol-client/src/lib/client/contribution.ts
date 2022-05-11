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

  public async mint(
    chainId: number,
    provider: ethers.providers.Provider,
    id: number,
    activityTypeId: number,
    userId: number,
    args: MintArgs
  ) {
    // mint with contract
    const contract = new GovrnContract(chainId, provider);
    const transaction = await contract.mint(args);
    await transaction.wait(10);
    // select partners expectation is it isn't too many
    const allPartners = await this.sdk.listUsers({
      where: { address: { in: args.partners } },
      first: args.partners?.length || 0,
    });
    if (id) {
      return await this.update({
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
          partners: {
            set: allPartners.result,
          },
          status: {
            connect: { name: 'minted' },
          },
        },
        where: { id },
      });
    }
    return this.create({
      data: {
        activity_type: { connect: { id: activityTypeId } },
        name: args.name.toString(),
        details: args.details.toString(),
        date_of_submission: new Date(args.dateOfSubmission.toString()),
        date_of_engagement: new Date(args.dateOfEngagement.toString()),
        proof: args.proof.toString(),
        partners: {
          connect: allPartners.result,
        },
        status: {
          connect: { name: 'minted' },
        },
        user: { connect: { id: userId } },
      },
    });
  }
}
