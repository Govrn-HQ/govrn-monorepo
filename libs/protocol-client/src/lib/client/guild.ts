import { BaseClient } from './base';
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
}
