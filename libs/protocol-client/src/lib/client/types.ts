import {
  GetUserCustomQuery,
  ListActivityTypesQuery,
  ListContributionsQuery,
  ListGuildsQuery,
} from '../protocol-types';

export type ContributionItem = ListContributionsQuery['result'][number];

export type UserData = GetUserCustomQuery['result'];

export type ActivityTypeItem = ListActivityTypesQuery['result'][number];

export type GuildItem = ListGuildsQuery['result'][number];
