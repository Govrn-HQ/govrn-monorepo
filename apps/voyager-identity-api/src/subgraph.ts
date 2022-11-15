import { GovrnGraphClient } from '@govrn/govrn-subgraph-client';
import { GovrnContract, NetworkConfig } from '@govrn/govrn-contract-client';
import { BigNumber, ethers } from 'ethers';
import { InferType, number, object, string } from 'yup';
import { LDContribution } from './types';

// Environment Variables.
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CHAIN_URL = process.env.CHAIN_URL;
const CHAIN_ID = Number(process.env.CHAIN_ID);

const LIMIT = 100;
const SKIP_LIMIT = 4999;

const networkConfig: NetworkConfig = {
  address: CONTRACT_ADDRESS,
  chainId: CHAIN_ID,
};

export const requestSchema = object({
  address: string().required(),
  page: number().optional().default(1),
  limit: number().optional().default(LIMIT),
});

const provider = new ethers.providers.JsonRpcProvider(CHAIN_URL);
const govrnContract = new GovrnContract(networkConfig, provider);
const client = new GovrnGraphClient(CHAIN_ID);

export const loadContributions = async ({
  address,
  limit,
  page,
}: InferType<typeof requestSchema>): Promise<LDContribution[]> => {
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
