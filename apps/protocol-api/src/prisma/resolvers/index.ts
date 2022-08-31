import { ActivityTypeCustomResolver } from './ActivityType';
import { AttestationResolver } from './Attestation';
import { ContributionCustomResolver } from './Contribution';
import { UserCustomResolver } from './User';

export const customResolvers = [
  ActivityTypeCustomResolver,
  AttestationResolver,
  ContributionCustomResolver,
  UserCustomResolver,
];
