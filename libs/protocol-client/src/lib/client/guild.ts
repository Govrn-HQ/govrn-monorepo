import { BaseClient } from './base';
import {
  GuildUpdateCustomInput,
  GuildUpdateCustomWhereInput,
  ListGuildsQueryVariables,
  ListGuildUsersQuery,
  ListGuildUsersQueryVariables,
} from '../protocol-types';
import {
  CreateGuildMutationVariables,
  GuildWhereUniqueInput,
} from '../protocol-types';
import { GraphQLClient } from 'graphql-request';
import { paginate } from '../utils/paginate';

// TODO: Add users query
export class Guild extends BaseClient {
  user: GuildUser;

  constructor(client: GraphQLClient) {
    super(client);
    this.user = new GuildUser(this.client);
  }

  public async create(args: CreateGuildMutationVariables) {
    const guild = await this.sdk.createGuild(args);
    return guild.createOneGuild;
  }

  public async get(args: GuildWhereUniqueInput) {
    const guild = await this.sdk.getGuild({ where: args });
    return guild.result;
  }

  public async update(
    args: GuildUpdateCustomInput,
    where: GuildUpdateCustomWhereInput,
  ) {
    const guild = await this.sdk.updateGuildCustom({ data: args, where });
    return guild.updateGuildCustom;
  }

  public async list(args: ListGuildsQueryVariables) {
    const guilds = await this.sdk.listGuilds(args);
    return guilds.result;
  }
}

export class GuildUser extends BaseClient {
  public async list(args: ListGuildUsersQueryVariables) {
    return paginate<ListGuildUsersQueryVariables, ListGuildUsersQuery>(
      this.sdk.listGuildUsers,
      args,
    );
  }
}
