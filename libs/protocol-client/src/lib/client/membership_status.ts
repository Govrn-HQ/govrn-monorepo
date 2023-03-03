import { BaseClient } from './base';
import { GuildMembershipStatusQueryVariables } from '../protocol-types';

export class GuildMembershipStatus extends BaseClient {
  public async get(args: GuildMembershipStatusQueryVariables) {
    const membershipStatus = await this.sdk.guildMembershipStatus(args);
    return membershipStatus.result;
  }
}
