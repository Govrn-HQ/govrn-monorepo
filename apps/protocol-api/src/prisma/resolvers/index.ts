import { ActivityTypeCustomResolver } from './ActivityType';
import { AttestationResolver } from './Attestation';
import { ContributionCustomResolver } from './Contribution';
import { GuildCustomResolver } from './Guild';
import { SplitCustomResolver } from './Split';
import { UserCustomResolver } from './User';
import { GuildUserCustomResolver } from './UserGuild';

export const customResolvers = [
  ActivityTypeCustomResolver,
  AttestationResolver,
  ContributionCustomResolver,
  GuildCustomResolver,
  UserCustomResolver,
  GuildUserCustomResolver,
  SplitCustomResolver,
];
