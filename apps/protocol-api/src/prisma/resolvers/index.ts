import { ActivityTypesCustomResolver } from './ActivityTypes';
import { AttestationResolver } from './Attestation';
import { ContributionCustomResolver } from './Contribution';
import { UserCustomResolver } from './User';

export const customResolvers = [
  ActivityTypesCustomResolver,
  AttestationResolver,
  ContributionCustomResolver,
  UserCustomResolver,
];
