import * as Types from '../../../../../dao-data/src/subgraph/schema.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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


export type ListAttestationsQuery = { attestations: Array<{ id: string, attestor: string, confidence: number, contribution?: { id: string } | undefined }> };

export type ListContributionsQueryVariables = Types.Exact<{
  where?: Types.Contribution_Filter;
  skip?: Types.Scalars['Int'];
  first?: Types.Scalars['Int'];
  orderBy?: Types.Contribution_OrderBy;
  orderDirection?: Types.OrderDirection;
}>;


export type ListContributionsQuery = { contributions: Array<{ id: string, address: string, contributionId: string, attestations?: Array<{ id: string }> | undefined }> };


export const ListAttestationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listAttestations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Attestation_filter"}}},"defaultValue":{"kind":"ObjectValue","fields":[]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"100"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Attestation_orderBy"}}},"defaultValue":{"kind":"EnumValue","value":"id"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},"defaultValue":{"kind":"EnumValue","value":"asc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attestations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attestor"}},{"kind":"Field","name":{"kind":"Name","value":"confidence"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ListAttestationsQuery, ListAttestationsQueryVariables>;
export const ListContributionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listContributions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Contribution_filter"}}},"defaultValue":{"kind":"ObjectValue","fields":[]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"100"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Contribution_orderBy"}}},"defaultValue":{"kind":"EnumValue","value":"id"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},"defaultValue":{"kind":"EnumValue","value":"asc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"attestations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contributionId"}}]}}]}}]} as unknown as DocumentNode<ListContributionsQuery, ListContributionsQueryVariables>;
export const AttestationFieldsFragmentDoc = gql`
    fragment attestationFields on Attestation {
  id
  attestor
  confidence
  contribution {
    id
  }
}
    `;
export const ContributionFieldsFragmentDoc = gql`
    fragment contributionFields on Contribution {
  id
  address
  attestations {
    id
  }
  contributionId
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