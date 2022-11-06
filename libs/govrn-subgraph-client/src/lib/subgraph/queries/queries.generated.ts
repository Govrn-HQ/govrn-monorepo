import * as Types from '../schema.generated';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type ListAttestationsQueryVariables = Types.Exact<{
  where?: Types.Attestation_Filter;
  skip?: Types.Scalars['Int'];
  first?: Types.Scalars['Int'];
  orderBy?: Types.Attestation_OrderBy;
  orderDirection?: Types.OrderDirection;
}>;


export type ListAttestationsQuery = { attestations: Array<{ id: string, attestor: string, confidence: number, txHash: string, contribution?: { id: string, txHash: string } | undefined }> };

export type ListContributionsQueryVariables = Types.Exact<{
  where?: Types.Contribution_Filter;
  skip?: Types.Scalars['Int'];
  first?: Types.Scalars['Int'];
  orderBy?: Types.Contribution_OrderBy;
  orderDirection?: Types.OrderDirection;
}>;


export type ListContributionsQuery = { contributions: Array<{ id: string, address: string, contributionId: number, txHash: string, attestations?: Array<{ id: string, txHash: string }> | undefined }> };

export const AttestationFieldsFragmentDoc = gql`
    fragment attestationFields on Attestation {
  id
  attestor
  confidence
  contribution {
    id
    txHash
  }
  txHash
}
    `;
export const ContributionFieldsFragmentDoc = gql`
    fragment contributionFields on Contribution {
  id
  address
  attestations {
    id
    txHash
  }
  contributionId
  txHash
}
    `;
export const ListAttestationsDocument = gql`
    query listAttestations($where: Attestation_filter! = {}, $skip: Int! = 0, $first: Int! = 100, $orderBy: Attestation_orderBy! = id, $orderDirection: OrderDirection! = asc) {
  attestations: attestations(
    where: $where
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
  ) {
    ...attestationFields
  }
}
    ${AttestationFieldsFragmentDoc}`;
export const ListContributionsDocument = gql`
    query listContributions($where: Contribution_filter! = {}, $skip: Int! = 0, $first: Int! = 100, $orderBy: Contribution_orderBy! = id, $orderDirection: OrderDirection! = asc) {
  contributions: contributions(
    where: $where
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
  ) {
    ...contributionFields
  }
}
    ${ContributionFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    listAttestations(variables?: ListAttestationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListAttestationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListAttestationsQuery>(ListAttestationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listAttestations', 'query');
    },
    listContributions(variables?: ListContributionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListContributionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListContributionsQuery>(ListContributionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listContributions', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;