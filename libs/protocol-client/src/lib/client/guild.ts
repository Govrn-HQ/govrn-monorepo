import { BaseClient } from './base';
import {
  CreateGuildImportMutationVariables,
  GuildUpdateCustomInput,
  GuildCustomWhereInput,
  VerificationSettingWhereUniqueInput,
  VerificationSettingUpdateInput,
  VerificationSettingCreateInput,
  ListGuildActivityTypesQueryVariables,
  ListGuildImportsQueryVariables,
  ListGuildsQueryVariables,
  UpdateGuildImportMutationVariables,
  ListGuildActivityTypesQuery,
} from '../protocol-types';
import {
  CreateGuildMutationVariables,
  GuildWhereUniqueInput,
} from '../protocol-types';
import { GuildUser } from './guild_user';
import { GraphQLClient } from 'graphql-request';
import { ListGuildImportsQuery } from '../protocol-types';
import { paginate } from '../utils/paginate';

// TODO: Add users query
export class Guild extends BaseClient {
  import: GuildImport;
  activity_type: GuildActivityType;
  verification_setting: GuildVerificationSetting;
  user: GuildUser;

  constructor(client: GraphQLClient) {
    super(client);
    this.import = new GuildImport(this.client);
    this.user = new GuildUser(this.client);
    this.import = new GuildImport(this.client);
    this.activity_type = new GuildActivityType(this.client);
    this.verification_setting = new GuildVerificationSetting(this.client);
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
    where: GuildCustomWhereInput,
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

  public async list(args: ListGuildImportsQueryVariables) {
    return paginate<ListGuildImportsQueryVariables, ListGuildImportsQuery>(
      this.sdk.listGuildImports,
      args,
    );
  }
}

// Guild activity types table
export class GuildActivityType extends BaseClient {
  public async list(args: ListGuildActivityTypesQueryVariables) {
    return paginate<
      ListGuildActivityTypesQueryVariables,
      ListGuildActivityTypesQuery
    >(this.sdk.listGuildActivityTypes, args);
  }
}

// GuildVerification settings
export class GuildVerificationSetting extends BaseClient {
  public async get(args: VerificationSettingWhereUniqueInput) {
    const guild = await this.sdk.getVerificationSetting({ where: args });
    return guild.result;
  }

  public async update(
    args: VerificationSettingUpdateInput,
    where: VerificationSettingWhereUniqueInput,
  ) {
    const guild = await this.sdk.updateVerificationSetting({
      data: args,
      where,
    });
    return guild.result;
  }

  public async create(args: VerificationSettingCreateInput) {
    const guild = await this.sdk.createVerificationSetting({
      data: args,
    });
    return guild.result;
  }
}
