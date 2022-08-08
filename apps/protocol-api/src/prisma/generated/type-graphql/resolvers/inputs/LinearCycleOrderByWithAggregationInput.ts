import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearCycleAvgOrderByAggregateInput } from '../inputs/LinearCycleAvgOrderByAggregateInput';
import { LinearCycleCountOrderByAggregateInput } from '../inputs/LinearCycleCountOrderByAggregateInput';
import { LinearCycleMaxOrderByAggregateInput } from '../inputs/LinearCycleMaxOrderByAggregateInput';
import { LinearCycleMinOrderByAggregateInput } from '../inputs/LinearCycleMinOrderByAggregateInput';
import { LinearCycleSumOrderByAggregateInput } from '../inputs/LinearCycleSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('LinearCycleOrderByWithAggregationInput', {
  isAbstract: true,
})
export class LinearCycleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  number?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  startsAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  endsAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  linear_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => LinearCycleCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: LinearCycleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearCycleAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: LinearCycleAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearCycleMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: LinearCycleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearCycleMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: LinearCycleMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearCycleSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: LinearCycleSumOrderByAggregateInput | undefined;
}
