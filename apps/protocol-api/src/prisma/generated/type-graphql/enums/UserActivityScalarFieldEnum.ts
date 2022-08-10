import * as TypeGraphQL from 'type-graphql';

export enum UserActivityScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  user_id = 'user_id',
  activity_type_id = 'activity_type_id',
}
TypeGraphQL.registerEnumType(UserActivityScalarFieldEnum, {
  name: 'UserActivityScalarFieldEnum',
  description: undefined,
});
