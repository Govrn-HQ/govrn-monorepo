import { BaseClient } from './base';
import {
  CreateGuildImportMutationVariables,
  CreateManyGuildUserMutationVariables,
  GuildUpdateCustomInput,
  GuildUpdateCustomWhereInput,
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
}

export class GuildUser extends BaseClient {
  public async createMany(args: CreateManyGuildUserMutationVariables) {
    const guildUser = await this.sdk.createManyGuildUser(args);
    return guildUser.createManyGuildUser;
  }
}
