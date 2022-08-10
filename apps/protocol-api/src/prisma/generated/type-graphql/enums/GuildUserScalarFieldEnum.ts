import * as TypeGraphQL from 'type-graphql';

export enum GuildUserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  user_id = 'user_id',
  guild_id = 'guild_id',
}
TypeGraphQL.registerEnumType(GuildUserScalarFieldEnum, {
  name: 'GuildUserScalarFieldEnum',
  description: undefined,
});
