import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { JobRunAvgOrderByAggregateInput } from '../inputs/JobRunAvgOrderByAggregateInput';
import { JobRunCountOrderByAggregateInput } from '../inputs/JobRunCountOrderByAggregateInput';
import { JobRunMaxOrderByAggregateInput } from '../inputs/JobRunMaxOrderByAggregateInput';
import { JobRunMinOrderByAggregateInput } from '../inputs/JobRunMinOrderByAggregateInput';
import { JobRunSumOrderByAggregateInput } from '../inputs/JobRunSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('JobRunOrderByWithAggregationInput', {
  isAbstract: true,
})
export class JobRunOrderByWithAggregationInput {
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
  completedDate?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  startDate?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  name?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => JobRunCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: JobRunCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobRunAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: JobRunAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobRunMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: JobRunMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobRunMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: JobRunMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobRunSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: JobRunSumOrderByAggregateInput | undefined;
}
