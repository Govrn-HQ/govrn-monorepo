import { BaseClient } from './base';
import {
  BulkCreateTwitterTweetMutationVariables,
  ListTwitterAccountsQueryVariables,
  UpsertTwitterUserMutationVariables,
} from '../protocol-types';

// get accounts
// bulk create
export class Twitter extends BaseClient {
  public async bulkCreate(args: BulkCreateTwitterTweetMutationVariables) {
    const count = await this.sdk.bulkCreateTwitterTweet(args);
    return count;
  }

  public async listAccounts(args: ListTwitterAccountsQueryVariables) {
    const accounts = await this.sdk.listTwitterAccounts(args);
    return accounts.result;
  }

  public async upsertUser(args: UpsertTwitterUserMutationVariables) {
    const user = await this.sdk.upsertTwitterUser(args);
    return user.upsertOneTwitterUser;
  }
}
