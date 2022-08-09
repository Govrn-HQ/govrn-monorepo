import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearProjectAvgOrderByAggregateInput } from '../inputs/LinearProjectAvgOrderByAggregateInput';
import { LinearProjectCountOrderByAggregateInput } from '../inputs/LinearProjectCountOrderByAggregateInput';
import { LinearProjectMaxOrderByAggregateInput } from '../inputs/LinearProjectMaxOrderByAggregateInput';
import { LinearProjectMinOrderByAggregateInput } from '../inputs/LinearProjectMinOrderByAggregateInput';
import { LinearProjectSumOrderByAggregateInput } from '../inputs/LinearProjectSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('LinearProjectOrderByWithAggregationInput', {
  isAbstract: true,
})
export class LinearProjectOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  name?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  linear_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => LinearProjectCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: LinearProjectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearProjectAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: LinearProjectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearProjectMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: LinearProjectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearProjectMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: LinearProjectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearProjectSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: LinearProjectSumOrderByAggregateInput | undefined;
}
