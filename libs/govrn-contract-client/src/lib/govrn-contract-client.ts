import { ethers } from 'ethers';
import { Govrn__factory, Govrn } from './generated';

// attest
// mint
// typechain --target ethers-v5 --out-dir app/contracts './node_modules/neufund-contracts/build/contracts/*.json'

type MintArgs = {
  name: ethers.BytesLike;
  details: ethers.BytesLike;
  dateOfSubmission: ethers.BigNumberish;
  dateOfEngagement: ethers.BigNumberish;
  proof: ethers.BytesLike;
  partners: string[];
  overrides?: ethers.Overrides & { from?: string | Promise<string> };
};

type AttestArgs = {
  contribution: ethers.BigNumberish;
  confidence: ethers.BigNumberish;
  overrides?: ethers.Overrides & { from?: string | Promise<string> };
};

const networks: { [key: number]: { address: string } } = {
  31337: {
    address: process.env['LOCAL_CONTRACT'] || '',
  },
};

export class GovrnContract {
  govrn: Govrn;
  constructor(chainId: number, provider: ethers.providers.Provider) {
    const networkConfig = networks[chainId];
    if (!networkConfig) {
      throw Error(`No network config for chainId ${chainId}`);
    }
    this.govrn = Govrn__factory.connect(networkConfig.address, provider);
  }

  public async mint(args: MintArgs) {
    return await this.govrn.mint(
      args.name,
      args.details,
      args.dateOfSubmission,
      args.dateOfEngagement,
      args.proof,
      args.partners,
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
}
