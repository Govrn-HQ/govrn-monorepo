import { ethers } from 'ethers';
import { Govrn__factory, Govrn } from './generated';

export type MintArgs = {
  detailsUri: Uint8Array;
  dateOfSubmission: number;
  dateOfEngagement: number;
  overrides?: ethers.Overrides & { from?: string | Promise<string> };
};

export type AttestArgs = {
  contribution: ethers.BigNumberish;
  confidence: ethers.BigNumberish;
  overrides?: ethers.Overrides & { from?: string | Promise<string> };
};

export type BulkMintArgs = {
  contributions: Govrn.BulkContributionStruct[];
};

export type BulkAttestArgs = {
  attestations: Govrn.AttestationStruct[];
};

export type ContributionsArgs = {
  tokenId: ethers.BigNumberish;
};

export type AttestationArgs = {
  tokenId: ethers.BigNumberish;
  address: string;
};

export type NetworkConfig = {
  address: string;
  chainId: number;
  name?: string;
};

export class GovrnContract {
  govrn: Govrn;

  constructor(
    networkConfig: NetworkConfig,
    provider: ethers.providers.Provider | ethers.Signer,
  ) {
    this.govrn = Govrn__factory.connect(networkConfig.address, provider);
  }

  public async mint(args: MintArgs) {
    return await this.govrn.mint(
      args.detailsUri,
      args.dateOfSubmission,
      args.dateOfEngagement,
      // args.overrides
    );
  }

  public async attest(args: AttestArgs) {
    return await this.govrn.attest(
      args.contribution,
      args.confidence,
      // args.overrides
    );
  }

  public async bulkAttest(args: BulkAttestArgs) {
    return await this.govrn.bulkAttest(args.attestations);
  }

  public async bulkMint(args: BulkMintArgs) {
    return await this.govrn.bulkMint(args.contributions);
  }

  public async contributions(args: ContributionsArgs) {
    return await this.govrn.contributions(args.tokenId);
  }

  public async attestations(args: AttestationArgs) {
    return await this.govrn.attestations(args.tokenId, args.address);
  }

  public async burnContribution(args: ContributionsArgs) {
    return await this.govrn.burnContribution(args.tokenId, {
      gasLimit: 2100000,
    });
  }
}
