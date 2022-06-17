import { BaseClient } from './base';
import {
  AttestationUserCreateInput,
  UserContributionCreateInput,
} from '../protocol-types';

// get accounts
// bulk create
export class Custom extends BaseClient {
  public async createUserAttestation(args: AttestationUserCreateInput) {
    const attestation = await this.sdk.createUserAttestation({ data: args });
    return attestation.createUserAttestation;
  }

  public async createUserContribution(args: UserContributionCreateInput) {
    const attestation = await this.sdk.createUserContribution({ data: args });
    return attestation.createUserContribution;
  }

  public async listUserByAddress(address: string) {
    const attestation = await this.sdk.listUserByAddress({ address });
    return attestation.result;
  }
}
