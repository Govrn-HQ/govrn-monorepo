import { UserUpdateInput, UserWhereUniqueInput } from '../protocol-types';
import { BaseClient } from './base';
import {
  CreateUserMutationVariables,
  ListUsersQueryVariables,
} from '../protocol-types';

export class User extends BaseClient {
  public async get(id: number) {
    const jobRun = await this.sdk.getUser({ where: { id } });
    return jobRun.result;
  }

  public async update(data: UserUpdateInput, where: UserWhereUniqueInput) {
    const jobRun = await this.sdk.updateUser({ where, data });
    return jobRun.updateUser;
  }

  public async list(args: ListUsersQueryVariables) {
    const contributions = await this.sdk.listUsers(args);
    return contributions.result;
  }

  public async create(args: CreateUserMutationVariables) {
    const contributions = await this.sdk.createUser(args);
    return contributions.createUser;
  }
}
