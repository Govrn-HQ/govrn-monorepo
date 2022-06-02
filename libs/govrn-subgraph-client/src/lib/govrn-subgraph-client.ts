import {
  getSdk,
  Sdk,
  ListContributionsQueryVariables,
  ListAttestationsQueryVariables,
} from './subgraph/queries/queries.generated';
import { GraphQLClient } from 'graphql-request';

export class GovrnGraphClient {
  sdk: Sdk;
  client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
    this.sdk = getSdk(client);
  }

  public async listContributions(args: ListContributionsQueryVariables) {
    return this.sdk.listContributions(args);
  }

  public async listAttestations(args: ListAttestationsQueryVariables) {
    return this.sdk.listAttestations(args);
  }
}
