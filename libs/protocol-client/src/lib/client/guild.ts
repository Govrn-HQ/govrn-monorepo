import { BaseClient } from './base';
import {
  CreateGuildImportMutationVariables,
  GuildUpdateCustomInput,
  GuildUpdateCustomWhereInput,
  ListGuildsQueryVariables,
  UpdateGuildImportMutationVariables,
} from '../protocol-types';
import {
  CreateGuildMutationVariables,
  GuildWhereUniqueInput,
} from '../protocol-types';
import { GuildUser } from './guild_user';
import { GraphQLClient } from 'graphql-request';

// TODO: Add users query
export class Guild extends BaseClient {
  import: GuildImport;
  user: GuildUser;

  constructor(client: GraphQLClient) {
    super(client);
    this.import = new GuildImport(this.client);
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

export class GuildImport extends BaseClient {
  public async create(args: CreateGuildImportMutationVariables) {
    const guildImport = await this.sdk.createGuildImport(args);
    return guildImport.createOneGuildImport;
  }

  public async update(args: UpdateGuildImportMutationVariables) {
    const guildImport = await this.sdk.updateGuildImport(args);
    return guildImport.updateOneGuildImport;
  }
}
