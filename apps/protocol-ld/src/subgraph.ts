// Environment Variables.
import { GraphQLClient } from 'graphql-request';
import { GovrnGraphClient } from '@govrn/govrn-subgraph-client';
import { GovrnContract, NetworkConfig } from '@govrn/govrn-contract-client';
import { BigNumber, ethers } from 'ethers';
import { LDContribution } from './types';

const SUBGRAPH_ENDPOINT = process.env.SUBGRAPH_URL;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CHAIN_URL = process.env.CHAIN_URL;

const networkConfig: NetworkConfig = {
  address: CONTRACT_ADDRESS,
  chainId: 100,
};

// load data from subgraph.
const provider = new ethers.providers.JsonRpcProvider(CHAIN_URL);
const govrnContract = new GovrnContract(networkConfig, provider);

export const loadContributions = async (): Promise<LDContribution[]> => {
  const graphQLClient = new GraphQLClient(SUBGRAPH_ENDPOINT);
  const client = new GovrnGraphClient(graphQLClient);

  const events = (await client.listAttestations({})).attestations;

  // load contributions for data like type..etc.
  const contrs = await Promise.all(
    events.map(async (e) => {
      const contr = await govrnContract.contributions({
        tokenId: e.contribution.id,
      });
      return { ...contr, ...e };
    })
  );

  return contrs.map((c) => {
    return {
      id: Number(BigNumber.from(c.contribution.id.toString()).toString()),
      attestor: c.attestor,
      owner: c.owner,
      detailsUri: ethers.utils.toUtf8String(c.detailsUri),
    };
  });
};
