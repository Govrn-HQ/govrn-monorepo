import { GetUserCustomQuery, ListContributionsQuery } from '../protocol-types';

export type ContributionItem = ListContributionsQuery['result'][number];

export type UserData = GetUserCustomQuery['result'];
