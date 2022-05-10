import { getSdk, Sdk } from '../protocol-types';
import { GraphQLClient } from 'graphql-request';

export class BaseClient {
  sdk: Sdk;

  constructor(client: GraphQLClient) {
    this.sdk = getSdk(client);
  }
}
