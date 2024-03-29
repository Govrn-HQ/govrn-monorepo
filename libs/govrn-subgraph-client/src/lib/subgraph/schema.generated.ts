export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: number;
  Bytes: string;
}

export interface Attestation {
  __typename?: 'Attestation';
  attestor: Scalars['Bytes'];
  confidence: Scalars['Int'];
  contribution?: Maybe<Contribution>;
  createdAt: Scalars['BigInt'];
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
}

export interface Attestation_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  attestor?: InputMaybe<Scalars['Bytes']>;
  attestor_contains?: InputMaybe<Scalars['Bytes']>;
  attestor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  attestor_not?: InputMaybe<Scalars['Bytes']>;
  attestor_not_contains?: InputMaybe<Scalars['Bytes']>;
  attestor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  confidence?: InputMaybe<Scalars['Int']>;
  confidence_gt?: InputMaybe<Scalars['Int']>;
  confidence_gte?: InputMaybe<Scalars['Int']>;
  confidence_in?: InputMaybe<Array<Scalars['Int']>>;
  confidence_lt?: InputMaybe<Scalars['Int']>;
  confidence_lte?: InputMaybe<Scalars['Int']>;
  confidence_not?: InputMaybe<Scalars['Int']>;
  confidence_not_in?: InputMaybe<Array<Scalars['Int']>>;
  contribution?: InputMaybe<Scalars['String']>;
  contribution_?: InputMaybe<Contribution_Filter>;
  contribution_contains?: InputMaybe<Scalars['String']>;
  contribution_contains_nocase?: InputMaybe<Scalars['String']>;
  contribution_ends_with?: InputMaybe<Scalars['String']>;
  contribution_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contribution_gt?: InputMaybe<Scalars['String']>;
  contribution_gte?: InputMaybe<Scalars['String']>;
  contribution_in?: InputMaybe<Array<Scalars['String']>>;
  contribution_lt?: InputMaybe<Scalars['String']>;
  contribution_lte?: InputMaybe<Scalars['String']>;
  contribution_not?: InputMaybe<Scalars['String']>;
  contribution_not_contains?: InputMaybe<Scalars['String']>;
  contribution_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contribution_not_ends_with?: InputMaybe<Scalars['String']>;
  contribution_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contribution_not_in?: InputMaybe<Array<Scalars['String']>>;
  contribution_not_starts_with?: InputMaybe<Scalars['String']>;
  contribution_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contribution_starts_with?: InputMaybe<Scalars['String']>;
  contribution_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
}

export type Attestation_OrderBy =
  | 'attestor'
  | 'confidence'
  | 'contribution'
  | 'createdAt'
  | 'id'
  | 'txHash';

export interface BlockChangedFilter {
  number_gte: Scalars['Int'];
}

export interface Block_Height {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
}

export interface Contribution {
  __typename?: 'Contribution';
  address: Scalars['Bytes'];
  attestations?: Maybe<Array<Attestation>>;
  contributionId: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
}


export interface ContributionAttestationsArgs {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Attestation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Attestation_Filter>;
}

export interface Contribution_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  attestations_?: InputMaybe<Attestation_Filter>;
  contributionId?: InputMaybe<Scalars['BigInt']>;
  contributionId_gt?: InputMaybe<Scalars['BigInt']>;
  contributionId_gte?: InputMaybe<Scalars['BigInt']>;
  contributionId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contributionId_lt?: InputMaybe<Scalars['BigInt']>;
  contributionId_lte?: InputMaybe<Scalars['BigInt']>;
  contributionId_not?: InputMaybe<Scalars['BigInt']>;
  contributionId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
}

export type Contribution_OrderBy =
  | 'address'
  | 'attestations'
  | 'contributionId'
  | 'createdAt'
  | 'id'
  | 'txHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export interface Query {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  attestation?: Maybe<Attestation>;
  attestations: Array<Attestation>;
  contribution?: Maybe<Contribution>;
  contributions: Array<Contribution>;
}


export interface Query_MetaArgs {
  block?: InputMaybe<Block_Height>;
}


export interface QueryAttestationArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryAttestationsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Attestation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Attestation_Filter>;
}


export interface QueryContributionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryContributionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contribution_Filter>;
}

export interface Subscription {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  attestation?: Maybe<Attestation>;
  attestations: Array<Attestation>;
  contribution?: Maybe<Contribution>;
  contributions: Array<Contribution>;
}


export interface Subscription_MetaArgs {
  block?: InputMaybe<Block_Height>;
}


export interface SubscriptionAttestationArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionAttestationsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Attestation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Attestation_Filter>;
}


export interface SubscriptionContributionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionContributionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contribution_Filter>;
}

export interface _Block_ {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
}

/** The type for the top-level _meta field */
export interface _Meta_ {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
}

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';
