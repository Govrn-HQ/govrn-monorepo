import { ActivityType } from './client/activity_type';
import { Attestation } from './client/attestation';
import { Contribution } from './client/contribution';
import { Linear } from './client/linear';
import { User } from './client/user';
import { GraphQLClient } from 'graphql-request';

export class GovrnProtocol {
  activity_type: ActivityType;
  attestation: Attestation;
  client: GraphQLClient;
  contribution: Contribution;
  linear: Linear;
  user: User;

  constructor(apiUrl: string) {
    this.client = new GraphQLClient(apiUrl, {
      headers: {
        'Content-Type': `application/json`,
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        Accept: `application/json`,
      },
    });
    this.linear = new Linear(this.client);
    this.user = new User(this.client);
    this.contribution = new Contribution(this.client);
    this.activity_type = new ActivityType(this.client);
    this.attestation = new Attestation(this.client);
  }
}
