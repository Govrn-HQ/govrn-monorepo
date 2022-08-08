import * as TypeGraphQL from 'type-graphql';

export enum TwitterAccountScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  account_name = 'account_name',
  guild_id = 'guild_id',
}
TypeGraphQL.registerEnumType(TwitterAccountScalarFieldEnum, {
  name: 'TwitterAccountScalarFieldEnum',
  description: undefined,
});
