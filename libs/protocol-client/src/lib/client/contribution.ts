import { BaseClient } from './base';
import {
  CreateContributionMutationVariables,
  ListContributionsQueryVariables,
  UpdateContributionMutationVariables,
} from '../protocol-types';

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
}
