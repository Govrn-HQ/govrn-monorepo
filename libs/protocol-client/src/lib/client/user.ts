import {
  ListUsersQueryVariables,
  UserCreateCustomInput,
  UserUpdateInput,
  UserWhereUniqueInput,
} from '../protocol-types';
import { BaseClient } from './base';
import { GraphQLClient } from 'graphql-request';
import { GuildUser } from './guild_user';

export class User extends BaseClient {
  guild: GuildUser;

  constructor(client: GraphQLClient) {
    super(client);
    this.guild = new GuildUser(this.client);
  }

  public async get(id: number) {
    const user = await this.sdk.getUserCustom({ id });
    return user.result;
  }

  public async update(data: UserUpdateInput, where: UserWhereUniqueInput) {
    const user = await this.sdk.updateUser({ where, data });
    return user.updateOneUser;
  }

  public async list(args: ListUsersQueryVariables) {
    const contributions = await this.sdk.listUsers(args);
    return contributions.result;
  }

  public async create(args: UserCreateCustomInput) {
    const contributions = await this.sdk.createUserCustom({ data: args });
    return contributions.createUserCustom;
  }
}
