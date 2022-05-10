import { BaseClient } from './base';
import { ListContributionQueryVariables } from '../protocol-types';

export class Contribution extends BaseClient {
  public async get(id: number) {
    const contribution = await this.sdk.getContribution({ where: { id } });
    return contribution.result;
  }

  public async list(args: ListContributionQueryVariables) {
    const contributions = await this.sdk.listContributions(args);
    return contributions.result;
  }
}
