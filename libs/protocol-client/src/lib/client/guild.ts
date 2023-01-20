import { BaseClient } from './base';
import {
  GuildUpdateCustomInput,
  GuildUpdateCustomWhereInput,
  ListGuildImportsQueryVariables,
  ListGuildsQueryVariables,
} from '../protocol-types';
import {
  CreateGuildMutationVariables,
  GuildWhereUniqueInput,
} from '../protocol-types';
import { GraphQLClient } from 'graphql-request';

// TODO: Add users query
export class Guild extends BaseClient {
  import: GuildImport;

  constructor(client: GraphQLClient) {
    super(client);
    this.import = new GuildImport(this.client);
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

export class GuildImport extends BaseClient {
  public async list(args: ListGuildImportsQueryVariables) {
    const guilds = await this.sdk.listGuildImports(args);
    return guilds.result;
  }
}
