import { BaseClient } from './base';
import { GetChainQueryVariables } from '@govrn/protocol-client';

export class Chain extends BaseClient {
  public async get(args: GetChainQueryVariables) {
    const chain = await this.sdk.getChain(args);
    return chain.result;
  }
}
