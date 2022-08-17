import { GraphQLClient } from 'graphql-request';
import { GovrnGraphClient } from '@govrn/govrn-subgraph-client';
import { GovrnContract, NetworkConfig } from '@govrn/govrn-contract-client';
import { BigNumber, ethers } from 'ethers';
import { LDContribution } from './types';

// Environment Variables.
const SUBGRAPH_ENDPOINT = process.env.SUBGRAPH_URL;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CHAIN_URL = process.env.CHAIN_URL;

const LIMIT = 100;
const SKIP_LIMIT = 4999;

const networkConfig: NetworkConfig = {
  address: CONTRACT_ADDRESS,
  chainId: 100,
};

const provider = new ethers.providers.JsonRpcProvider(CHAIN_URL);
const govrnContract = new GovrnContract(networkConfig, provider);
const graphQLClient = new GraphQLClient(SUBGRAPH_ENDPOINT);
const client = new GovrnGraphClient(graphQLClient);

export const loadContributions = async (options: {
  address?: string;
  page?: number;
  limit?: number;
}): Promise<LDContribution[]> => {
  if (!options.address) {
    throw new Error("Attestor's address is missing");
  }

  const address = options.address;
  const page = Math.abs(options.page || 1); // || for NaN value.
  const limit = Math.abs(options.limit || LIMIT);
  const skip = (page - 1) * limit;

  if (skip > SKIP_LIMIT) {
    throw new Error('Maximum Limit exceeded.');
  }

  const contrsEvents = (
    await client.listContributions({
      where: { address },
    })
  ).contributions;

  const x = await Promise.all(
    contrsEvents.map(async e => {
      const contr = await govrnContract.contributions({
        tokenId: e.id,
      });
      return { ...contr, ...e };
    }),
  );

  return x.map(c => ({
    id: Number(BigNumber.from(c.id.toString()).toString()),
    owner: c.owner,
    detailsUri: ethers.utils.toUtf8String(c.detailsUri),
  }));
};
