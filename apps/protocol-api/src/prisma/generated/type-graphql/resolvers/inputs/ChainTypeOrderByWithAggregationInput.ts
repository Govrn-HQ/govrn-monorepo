import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChainTypeAvgOrderByAggregateInput } from '../inputs/ChainTypeAvgOrderByAggregateInput';
import { ChainTypeCountOrderByAggregateInput } from '../inputs/ChainTypeCountOrderByAggregateInput';
import { ChainTypeMaxOrderByAggregateInput } from '../inputs/ChainTypeMaxOrderByAggregateInput';
import { ChainTypeMinOrderByAggregateInput } from '../inputs/ChainTypeMinOrderByAggregateInput';
import { ChainTypeSumOrderByAggregateInput } from '../inputs/ChainTypeSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('ChainTypeOrderByWithAggregationInput', {
  isAbstract: true,
})
export class ChainTypeOrderByWithAggregationInput {
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
  name?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => ChainTypeCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ChainTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: ChainTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ChainTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ChainTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: ChainTypeSumOrderByAggregateInput | undefined;
}
