import { BaseClient } from './base';
import {
  AttestationUserCreateInput,
  UserContributionCreateInput,
  UserContributionUpdateInput,
  UserUpdateCustomInput,
  GetUserContributionCountInput
} from '../protocol-types';

// get accounts
// bulk create
export class Custom extends BaseClient {
  public async createUserAttestation(args: AttestationUserCreateInput) {
    const attestation = await this.sdk.createUserAttestation({ data: args });
    return attestation.createUserAttestation;
  }

  public async createUserContribution(args: UserContributionCreateInput) {
    const contribution = await this.sdk.createUserContribution({ data: args });
    return contribution.createUserContribution;
  }

  public async updateUserContribution(args: UserContributionUpdateInput) {
    const contribution = await this.sdk.updateUserContribution({ data: args });
    return contribution.updateUserContribution;
  }

  public async updateUser(args: UserUpdateCustomInput) {
    const contribution = await this.sdk.updateUserCustom({ data: args });
    return contribution.updateUserCustom;
  }

  public async listUserByAddress(address: string) {
    const attestation = await this.sdk.listUserByAddress({ address });
    return attestation.result;
  }

  public async getUserContributionCount(args: GetUserContributionCountInput) {
    const contributionCount = await this.sdk.getUserContributionCount({ where: args });
    return contributionCount.result;
  }
}
