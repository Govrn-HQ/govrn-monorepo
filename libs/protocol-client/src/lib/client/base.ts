import { getSdk, Sdk } from '../protocol-types';
import { GraphQLClient } from 'graphql-request';

export class BaseClient {
  sdk: Sdk;
  client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
    this.sdk = getSdk(client);
  }
}
