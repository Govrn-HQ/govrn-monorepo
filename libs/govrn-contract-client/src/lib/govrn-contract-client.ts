import { ethers } from 'ethers';
import { Govrn__factory, Govrn } from './generated';

export type MintArgs = {
  name: ethers.BytesLike;
  details: ethers.BytesLike;
  dateOfSubmission: ethers.BigNumberish;
  dateOfEngagement: ethers.BigNumberish;
  proof: ethers.BytesLike;
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

export type NetworkConfig = {
  address: string;
  chainId: number;
};

export class GovrnContract {
  govrn: Govrn;
  constructor(
    networkConfig: NetworkConfig,
    provider: ethers.providers.Provider
  ) {
    this.govrn = Govrn__factory.connect(networkConfig.address, provider);
  }

  public async mint(args: MintArgs) {
    return await this.govrn.mint(
      args.name,
      args.details,
      args.dateOfSubmission,
      args.dateOfEngagement,
      args.proof,
      args.overrides
    );
  }

  public async attest(args: AttestArgs) {
    return await this.govrn.attest(
      args.contribution,
      args.confidence,
      args.overrides
    );
  }

  public async bulkAttest(args: BulkAttestArgs) {
    return await this.govrn.bulkAttest(args.attestations);
  }

  public async bulkMint(args: BulkMintArgs) {
    return await this.govrn.bulkMint(args.contributions);
  }
}
