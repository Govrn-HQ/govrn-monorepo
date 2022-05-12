import { ethers } from 'ethers';
import { BaseClient } from './base';
import { Attestation } from './attestation';
import {
  CreateContributionMutationVariables,
  ListContributionsQueryVariables,
  UpdateContributionMutationVariables,
} from '../protocol-types';
import {
  GovrnContract,
  MintArgs,
  AttestArgs,
} from '@govrn/govrn-contract-client';

export class Contribution extends BaseClient {
  public async get(id: number) {
    const contribution = await this.sdk.getContribution({ where: { id } });
    return contribution.result;
  }

  public async list(args: ListContributionsQueryVariables) {
    const contributions = await this.sdk.listContributions(args);
    return contributions.result;
  }

  public async create(args: CreateContributionMutationVariables) {
    const contributions = await this.sdk.createContribution(args);
    return contributions.createContribution;
  }

  public async update(args: UpdateContributionMutationVariables) {
    const contributions = await this.sdk.updateContribution(args);
    return contributions.updateContribution;
  }

  public async mint(
    chainId: number,
    provider: ethers.providers.Provider,
    address: string,
    id: number,
    activityTypeId: number,
    userId: number,
    args: MintArgs
  ) {
    const contract = new GovrnContract(chainId, provider);
    const transaction = await contract.mint(args);
    const transactionReceipt = await transaction.wait(10);
    let onChainId = null;
    const logs = transactionReceipt.logs;
    for (const log of logs) {
      const decodedLog = contract.govrn.interface.parseLog(log);
      // TODO: Can we avoid hardcoding the event name
      if (decodedLog.name === 'Mint') {
        onChainId = decodedLog.args['id'];
        break;
      }
    }
    if (!onChainId) {
      throw Error('Failed to fetch on chain Id');
    }
    const allPartners = await this.sdk.listUsers({
      where: { address: { in: args.partners } },
      first: args.partners?.length || 0,
    });
    if (id) {
      return await this.update({
        data: {
          name: { set: args.name.toString() },
          details: { set: args.details.toString() },
          date_of_submission: {
            set: new Date(args.dateOfSubmission.toString()),
          },
          date_of_engagement: {
            set: new Date(args.dateOfEngagement.toString()),
          },
          proof: {
            set: args.proof.toString(),
          },
          partners: {
            set: allPartners.result,
          },
          status: {
            connect: { name: 'minted' },
          },
          on_chain_id: {
            set: onChainId,
          },
        },
        where: { id },
      });
    }
    return this.create({
      data: {
        activity_type: { connect: { id: activityTypeId } },
        name: args.name.toString(),
        details: args.details.toString(),
        date_of_submission: new Date(args.dateOfSubmission.toString()),
        date_of_engagement: new Date(args.dateOfEngagement.toString()),
        proof: args.proof.toString(),
        partners: {
          connect: allPartners.result,
        },
        status: {
          connect: { name: 'minted' },
        },
        user: { connect: { id: userId } },
        on_chain_id: onChainId,
      },
    });
  }

  public async attest(
    chainId: number,
    provider: ethers.providers.Provider,
    id: number,
    activityTypeId: number,
    userId: number,
    args: AttestArgs
  ) {
    const attestCrud = new Attestation(this.client);
    const contract = new GovrnContract(chainId, provider);
    const transaction = await contract.attest(args);
    await transaction.wait(10);
    if (id) {
      return await attestCrud.update({
        data: {
          confidence: { connect: { name: args.confidence.toString() } },
          contribution: {
            connect: { on_chain_id: parseInt(args.contribution.toString()) },
          },
        },
        where: { id },
      });
    }
    return attestCrud.create({
      data: {
        confidence: { connect: { name: args.confidence.toString() } },
        contribution: {
          connect: { on_chain_id: parseInt(args.contribution.toString()) },
        },
        user: { connect: { id: userId } },
      },
    });
  }
}
