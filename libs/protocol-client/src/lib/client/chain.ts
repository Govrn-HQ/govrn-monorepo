import { BaseClient } from './base';
import { GetChainQueryVariables } from '../protocol-types';

export class Chain extends BaseClient {
  public async get(args: GetChainQueryVariables) {
    const chain = await this.sdk.getChain(args);
    return chain.result;
  }
}
