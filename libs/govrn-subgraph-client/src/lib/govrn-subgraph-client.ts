import {
  getSdk,
  Sdk,
  ListContributionsQueryVariables,
  ListAttestationsQueryVariables,
} from './subgraph/queries/queries.generated';
import { GraphQLClient } from 'graphql-request';

const chains: { [id: number]: string } = {
  5: 'https://api.thegraph.com/subgraphs/name/govrn-hq/govrn-protocol-goerli',
  100: 'https://api.thegraph.com/subgraphs/name/govrn-hq/govrn-protocol-gnosis',
};

export class GovrnGraphClient {
  sdk: Sdk;
  client: GraphQLClient;

  constructor(chainId: number) {
    const chainUrl = chains[chainId];
    if (!chainUrl) {
      throw new Error(`Chain is not supported yet id: ${chainId}`);
    }

    this.client = new GraphQLClient(chainUrl);
    this.sdk = getSdk(this.client);
  }

  public async listContributions(args: ListContributionsQueryVariables) {
    return this.sdk.listContributions(args);
  }

  public async listAttestations(args: ListAttestationsQueryVariables) {
    return this.sdk.listAttestations(args);
  }
}
