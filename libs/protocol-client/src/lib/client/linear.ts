import {
  getSdk,
  Sdk,
  ListLinearJobRunsQueryVariables,
  BulkCreateIssuesMutationVariables,
  UpsertLinearUserMutationVariables,
  UpsertLinearCycleMutationVariables,
  UpsertLinearProjectMutationVariables,
  UpsertLinearTeamMutationVariables,
} from '../protocol-types';
import { GraphQLClient } from 'graphql-request';

export class Linear {
  jobRun: JobRun;
  issue: Issue;
  user: User;
  cycle: Cycle;
  project: Project;
  team: Team;

  constructor(client: GraphQLClient) {
    this.jobRun = new JobRun(client);
    this.issue = new Issue(client);
    this.user = new User(client);
    this.cycle = new Cycle(client);
    this.project = new Project(client);
    this.team = new Team(client);
  }
}

class BaseClient {
  sdk: Sdk;

  constructor(client: GraphQLClient) {
    this.sdk = getSdk(client);
  }
}

class JobRun extends BaseClient {
  public async get(id: number) {
    const jobRun = await this.sdk.getLinearJobRun({ where: { id } });
    return jobRun.result;
  }

  public async list(args: ListLinearJobRunsQueryVariables) {
    const jobRuns = await this.sdk.listLinearJobRuns(args);
    return jobRuns.result;
  }
}

class Issue extends BaseClient {
  public async bulkCreate(args: BulkCreateIssuesMutationVariables) {
    const count = await this.sdk.bulkCreateIssues(args);
    return count;
  }
}

class User extends BaseClient {
  public async upsert(args: UpsertLinearUserMutationVariables) {
    const user = await this.sdk.upsertLinearUser(args);
    return user.upsertLinearUser;
  }
}

class Cycle extends BaseClient {
  public async upsert(args: UpsertLinearCycleMutationVariables) {
    const user = await this.sdk.upsertLinearCycle(args);
    return user.upsertLinearCycle;
  }
}

class Project extends BaseClient {
  public async upsert(args: UpsertLinearProjectMutationVariables) {
    const user = await this.sdk.upsertLinearProject(args);
    return user.upsertLinearProject;
  }
}

class Team extends BaseClient {
  public async upsert(args: UpsertLinearTeamMutationVariables) {
    const user = await this.sdk.upsertLinearTeam(args);
    return user.upsertLinearTeam;
  }
}
