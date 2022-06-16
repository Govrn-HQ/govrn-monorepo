import { BaseClient } from './base';
import { AttestationUserCreateInput } from '../protocol-types';

// get accounts
// bulk create
export class Custom extends BaseClient {
  public async createUserAttestation(args: AttestationUserCreateInput) {
    const attestation = await this.sdk.createUserAttestation({ data: args });
    return attestation.createUserAttestation;
  }
}
