import { BaseClient } from './base';
import {
  AttestationUserCreateInput,
  UserContributionCreateInput,
  UserContributionUpdateInput,
  UserUpdateCustomInput,
  GetUserContributionCountInput,
  ListActivityTypesByUserInput,
  GetDaoContributionCountInput,
} from '../protocol-types';

export class Custom extends BaseClient {
  public async createUserAttestation(args: AttestationUserCreateInput) {
    const attestation = await this.sdk.createUserAttestation({ data: args });
    return attestation.createUserAttestation;
  }

  public async createUserContribution(args: UserContributionCreateInput) {
    const activityType = (
      await this.sdk.getOrCreateActivityType({
        data: {
          activityTypeName: args.activityTypeName,
          userId: args.userId,
        },
      })
    ).getOrCreateActivityType;

    const contribution = await this.sdk.createUserContribution({
      data: { ...args, activityTypeName: activityType.name },
    });
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

  public async getContributionCountByDateForUserInRange(
    args: GetUserContributionCountInput,
  ) {
    const contributionCount =
      await this.sdk.getContributionCountByDateForUserInRange({ where: args });
    return contributionCount.result;
  }

  public async listActivityTypesByUser(args: ListActivityTypesByUserInput) {
    const activityTypes = await this.sdk.listActivityTypesByUser({
      where: args,
    });
    return activityTypes.result;
  }

  public async getContributionCountByActivityType(args: GetDaoContributionCountInput) {
    const contributionCountByActivity = 
      await this.sdk.getContributionCountByActivityType({ where: args });
    return contributionCountByActivity.result;
  }
}
