import { BaseClient } from './base';
import { GetGuildQueryVariables } from '../protocol-types';
import {
  CreateGuildMutationVariables,
  GuildWhereUniqueInput,
} from '../protocol-types';

// TODO: Add users query
// TODO: Add get guild
export class Guild extends BaseClient {
  public async create(args: CreateGuildMutationVariables) {
    const guild = await this.sdk.createGuild(args);
    return guild.createGuild;
  }

  public async get(args: GuildWhereUniqueInput) {
    const guild = await this.sdk.getGuild({ where: args });
    return guild.result;
  }

  public async list(args: any) {
    const guilds = await this.sdk.listGuilds(args);
    return guilds.result;
  }
}
