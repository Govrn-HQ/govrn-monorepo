import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildActivityTypeWhereInput } from '../inputs/GuildActivityTypeWhereInput';

@TypeGraphQL.InputType('GuildActivityTypeListRelationFilter', {
  isAbstract: true,
})
export class GuildActivityTypeListRelationFilter {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereInput, {
    nullable: true,
  })
  every?: GuildActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeWhereInput, {
    nullable: true,
  })
  some?: GuildActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeWhereInput, {
    nullable: true,
  })
  none?: GuildActivityTypeWhereInput | undefined;
}
