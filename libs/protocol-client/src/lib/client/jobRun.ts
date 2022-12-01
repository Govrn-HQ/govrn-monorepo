import {
  ListJobRunsQueryVariables,
  MutationCreateOneJobRunArgs,
} from '../protocol-types';
import { BaseClient } from './base';

export class JobRun extends BaseClient {
  public async get(id: number) {
    const jobRun = await this.sdk.getJobRun({ where: { id } });
    return jobRun.result;
  }

  public async list(args: ListJobRunsQueryVariables) {
    const jobRuns = await this.sdk.listJobRuns(args);
    return jobRuns.result;
  }

  public async create(args: MutationCreateOneJobRunArgs) {
    const jobRuns = await this.sdk.createJobRun(args);
    return jobRuns.createOneJobRun;
  }
}
