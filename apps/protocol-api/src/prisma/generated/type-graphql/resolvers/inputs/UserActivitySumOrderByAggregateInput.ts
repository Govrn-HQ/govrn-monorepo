import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('UserActivitySumOrderByAggregateInput', {
  isAbstract: true,
})
export class UserActivitySumOrderByAggregateInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  user_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  activity_type_id?: 'asc' | 'desc' | undefined;
}
