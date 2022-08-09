import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { GuildRelationFilter } from '../inputs/GuildRelationFilter';
import { IntFilter } from '../inputs/IntFilter';
import { UserRelationFilter } from '../inputs/UserRelationFilter';

@TypeGraphQL.InputType('GuildUserWhereInput', {
  isAbstract: true,
})
export class GuildUserWhereInput {
  @TypeGraphQL.Field(_type => [GuildUserWhereInput], {
    nullable: true,
  })
  AND?: GuildUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereInput], {
    nullable: true,
  })
  OR?: GuildUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereInput], {
    nullable: true,
  })
  NOT?: GuildUserWhereInput[] | undefined;

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
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildRelationFilter, {
    nullable: true,
  })
  guild?: GuildRelationFilter | undefined;
}
