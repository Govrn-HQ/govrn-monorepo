import * as TypeGraphQL from 'type-graphql';

export enum CategoryActivityTypeScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  category_activity_id = 'category_activity_id',
  activity_type_id = 'activity_type_id',
}
TypeGraphQL.registerEnumType(CategoryActivityTypeScalarFieldEnum, {
  name: 'CategoryActivityTypeScalarFieldEnum',
  description: undefined,
});
