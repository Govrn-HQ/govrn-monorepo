import { Linear } from './client/linear';
import { GraphQLClient } from 'graphql-request';

export class GovrnProtocol {
  client: GraphQLClient;
  linear: Linear;

  constructor(apiUrl: string) {
    this.client = new GraphQLClient(apiUrl);
    this.linear = new Linear(this.client);
  }
}
