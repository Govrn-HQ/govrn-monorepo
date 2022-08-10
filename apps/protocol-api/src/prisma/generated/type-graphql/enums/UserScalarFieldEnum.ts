import * as TypeGraphQL from 'type-graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
  display_name = 'display_name',
  address = 'address',
  chain_type_id = 'chain_type_id',
  full_name = 'full_name',
  active = 'active',
  email = 'email',
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
