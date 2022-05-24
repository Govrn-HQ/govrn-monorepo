import { BaseClient } from './base';
import { BulkCreateTwitterTweetMutationVariables } from '../protocol-types';

class Twitter extends BaseClient {
  public async bulkCreate(args: BulkCreateTwitterTweetMutationVariables);
}
