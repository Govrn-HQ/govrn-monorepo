import { AttestationResolver } from './Attestation';
import { ContributionCustomResolver } from './Contribution';
import { UserCustomResolver } from './User';

export const customResolvers = [
  AttestationResolver,
  ContributionCustomResolver,
  UserCustomResolver,
];
