import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserActivityAvgOrderByAggregateInput } from '../inputs/UserActivityAvgOrderByAggregateInput';
import { UserActivityCountOrderByAggregateInput } from '../inputs/UserActivityCountOrderByAggregateInput';
import { UserActivityMaxOrderByAggregateInput } from '../inputs/UserActivityMaxOrderByAggregateInput';
import { UserActivityMinOrderByAggregateInput } from '../inputs/UserActivityMinOrderByAggregateInput';
import { UserActivitySumOrderByAggregateInput } from '../inputs/UserActivitySumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('UserActivityOrderByWithAggregationInput', {
  isAbstract: true,
})
export class UserActivityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  user_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  activity_type_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => UserActivityCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: UserActivityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserActivityAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: UserActivityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserActivityMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: UserActivityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserActivityMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: UserActivityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserActivitySumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: UserActivitySumOrderByAggregateInput | undefined;
}
