import {
  GetUserCustomQuery,
  ListActivityTypesQuery,
  ListContributionsQuery,
  ListGuildsQuery,
} from '@govrn/protocol-client';

type ObjectLike = { [key: string]: unknown };

type ResultOf<T extends { result: ObjectLike }> = T['result'];

type ResultArrayOf<T extends { result: Array<ObjectLike> }> =
  T['result'][number];

export type UIContribution = ResultArrayOf<ListContributionsQuery>;

export type UIUser = ResultOf<GetUserCustomQuery>;

export type UIActivityType = ResultArrayOf<ListActivityTypesQuery>;

export type UIGuild = ResultArrayOf<ListGuildsQuery>;
