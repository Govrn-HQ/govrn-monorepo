import { UserUpdateInput, UserWhereUniqueInput } from '../protocol-types';
import { BaseClient } from './base';
import {
  UserCreateCustomInput,
  ListUsersQueryVariables,
  MutationDeleteGuildUserArgs,
} from '../protocol-types';
import { GraphQLClient } from 'graphql-request';

export class User extends BaseClient {
  guild: GuildUser;

  constructor(client: GraphQLClient) {
    super(client);
    this.guild = new GuildUser(this.client);
  }

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

  public async create(args: UserCreateCustomInput) {
    console.log(this.sdk);
    const contributions = await this.sdk.createUserCustom({ data: args });
    console.log(contributions);
    return contributions.createUserCustom;
  }
}

class GuildUser extends BaseClient {
  public async delete(args: MutationDeleteGuildUserArgs) {
    const guildUser = await this.sdk.deleteGuildUser(args);
    return guildUser;
  }
}
