import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';

@TypeGraphQL.InputType('GuildActivityTypeScalarWhereInput', {
  isAbstract: true,
})
export class GuildActivityTypeScalarWhereInput {
  @TypeGraphQL.Field(_type => [GuildActivityTypeScalarWhereInput], {
    nullable: true,
  })
  AND?: GuildActivityTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeScalarWhereInput], {
    nullable: true,
  })
  OR?: GuildActivityTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeScalarWhereInput], {
    nullable: true,
  })
  NOT?: GuildActivityTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  activity_type_id?: IntFilter | undefined;
}
