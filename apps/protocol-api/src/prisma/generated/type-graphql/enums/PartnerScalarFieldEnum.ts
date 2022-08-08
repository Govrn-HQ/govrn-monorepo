import * as TypeGraphQL from 'type-graphql';

export enum PartnerScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  user_id = 'user_id',
  contribution_id = 'contribution_id',
}
TypeGraphQL.registerEnumType(PartnerScalarFieldEnum, {
  name: 'PartnerScalarFieldEnum',
  description: undefined,
});
