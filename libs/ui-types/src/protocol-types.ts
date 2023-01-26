import {
  GetUserCustomQuery,
  ListActivityTypesQuery,
  ListContributionsQuery,
  ListGuildsQuery,
  ListAttestationsQuery,
  ListGuildImportsQuery,
} from '@govrn/protocol-client';

type ObjectLike = { [key: string]: unknown };

type ResultOf<T extends { result: ObjectLike }> = T['result'];

type ResultArrayOf<T extends { result: Array<ObjectLike> }> =
  T['result'][number];

type ResultArray<T extends { result: Array<ObjectLike> }> = T['result'];

export type UIContribution = ResultArrayOf<ListContributionsQuery>;

export type UIUser = ResultOf<GetUserCustomQuery>;

export type UIActivityType = ResultArrayOf<ListActivityTypesQuery>;

export type UIGuild = ResultArrayOf<ListGuildsQuery>;

export type UIGuilds = ResultArray<ListGuildsQuery>;

export type UIAttestations = ResultArray<ListAttestationsQuery>;

export type UIAttestation = ResultArrayOf<ListAttestationsQuery>;

export type UIGuildImportHistory = ResultArrayOf<ListGuildImportsQuery>;
