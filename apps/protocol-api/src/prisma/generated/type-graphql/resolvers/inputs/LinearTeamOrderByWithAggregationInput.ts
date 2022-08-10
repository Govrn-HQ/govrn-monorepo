import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearTeamAvgOrderByAggregateInput } from '../inputs/LinearTeamAvgOrderByAggregateInput';
import { LinearTeamCountOrderByAggregateInput } from '../inputs/LinearTeamCountOrderByAggregateInput';
import { LinearTeamMaxOrderByAggregateInput } from '../inputs/LinearTeamMaxOrderByAggregateInput';
import { LinearTeamMinOrderByAggregateInput } from '../inputs/LinearTeamMinOrderByAggregateInput';
import { LinearTeamSumOrderByAggregateInput } from '../inputs/LinearTeamSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('LinearTeamOrderByWithAggregationInput', {
  isAbstract: true,
})
export class LinearTeamOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  linear_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  name?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  key?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => LinearTeamCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: LinearTeamCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearTeamAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: LinearTeamAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearTeamMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: LinearTeamMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearTeamMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: LinearTeamMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearTeamSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: LinearTeamSumOrderByAggregateInput | undefined;
}
