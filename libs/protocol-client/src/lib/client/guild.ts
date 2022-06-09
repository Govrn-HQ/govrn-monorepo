import { BaseClient } from './base';
import { CreateGuildMutationVariables } from '../protocol-types';

export class Guild extends BaseClient {
  public async create(args: CreateGuildMutationVariables) {
    const guild = await this.sdk.createGuild(args);
    return guild.createGuild;
  }
}
