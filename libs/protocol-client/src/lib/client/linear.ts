import {
  BulkCreateIssuesMutationVariables,
  UpdateLinearUserMutationVariables,
  UpsertLinearUserMutationVariables,
  UpsertLinearCycleMutationVariables,
  UpsertLinearProjectMutationVariables,
  UpsertLinearTeamMutationVariables,
  ListLinearIssuesQueryVariables,
  ListLinearUsersQueryVariables,
  ListLinearUsersQuery,
} from '../protocol-types';
import { BaseClient } from './base';
import { paginate } from '../utils/paginate';
import { GraphQLClient } from 'graphql-request';

export class Linear {
  issue: Issue;
  user: User;
  cycle: Cycle;
  project: Project;
  team: Team;

  constructor(client: GraphQLClient) {
    this.issue = new Issue(client);
    this.user = new User(client);
    this.cycle = new Cycle(client);
    this.project = new Project(client);
    this.team = new Team(client);
  }
}

class Issue extends BaseClient {
  public async bulkCreate(args: BulkCreateIssuesMutationVariables) {
    const count = await this.sdk.bulkCreateIssues(args);
    return count;
  }

  public async list(args: ListLinearIssuesQueryVariables) {
    const issues = await this.sdk.listLinearIssues(args);
    return issues;
  }
}

class User extends BaseClient {
  public async upsert(args: UpsertLinearUserMutationVariables) {
    const user = await this.sdk.upsertLinearUser(args);
    return user.upsertOneLinearUser;
  }

  public async update(args: UpdateLinearUserMutationVariables) {
    const user = await this.sdk.updateLinearUser(args);
    return user.updateOneLinearUser;
  }

  public list(args: ListLinearUsersQueryVariables) {
    return paginate<ListLinearUsersQueryVariables, ListLinearUsersQuery>(
      this.sdk.listLinearUsers,
      args,
    );
  }
}

class Cycle extends BaseClient {
  public async upsert(args: UpsertLinearCycleMutationVariables) {
    const user = await this.sdk.upsertLinearCycle(args);
    return user.upsertOneLinearCycle;
  }
}

class Project extends BaseClient {
  public async upsert(args: UpsertLinearProjectMutationVariables) {
    const user = await this.sdk.upsertLinearProject(args);
    return user.upsertOneLinearProject;
  }
}

class Team extends BaseClient {
  public async upsert(args: UpsertLinearTeamMutationVariables) {
    const user = await this.sdk.upsertLinearTeam(args);
    return user.upsertOneLinearTeam;
  }
}
