import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeRelationFilter } from '../inputs/ActivityTypeRelationFilter';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { UserRelationFilter } from '../inputs/UserRelationFilter';

@TypeGraphQL.InputType('UserActivityWhereInput', {
  isAbstract: true,
})
export class UserActivityWhereInput {
  @TypeGraphQL.Field(_type => [UserActivityWhereInput], {
    nullable: true,
  })
  AND?: UserActivityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityWhereInput], {
    nullable: true,
  })
  OR?: UserActivityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityWhereInput], {
    nullable: true,
  })
  NOT?: UserActivityWhereInput[] | undefined;

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
  activity_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeRelationFilter, {
    nullable: true,
  })
  activity_type?: ActivityTypeRelationFilter | undefined;
}
