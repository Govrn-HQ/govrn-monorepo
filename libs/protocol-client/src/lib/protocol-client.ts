import { Contribution } from './client/contribution';
import { Linear } from './client/linear';
import { User } from './client/user';
import { GraphQLClient } from 'graphql-request';

export class GovrnProtocol {
  client: GraphQLClient;
  contribution: Contribution;
  linear: Linear;
  user: User;

  constructor(apiUrl: string) {
    this.client = new GraphQLClient(apiUrl);
    this.linear = new Linear(this.client);
    this.user = new User(this.client);
    this.contribution = new Contribution(this.client);
  }
}
