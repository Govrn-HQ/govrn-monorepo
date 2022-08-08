import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationConfidenceAvgOrderByAggregateInput } from '../inputs/AttestationConfidenceAvgOrderByAggregateInput';
import { AttestationConfidenceCountOrderByAggregateInput } from '../inputs/AttestationConfidenceCountOrderByAggregateInput';
import { AttestationConfidenceMaxOrderByAggregateInput } from '../inputs/AttestationConfidenceMaxOrderByAggregateInput';
import { AttestationConfidenceMinOrderByAggregateInput } from '../inputs/AttestationConfidenceMinOrderByAggregateInput';
import { AttestationConfidenceSumOrderByAggregateInput } from '../inputs/AttestationConfidenceSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('AttestationConfidenceOrderByWithAggregationInput', {
  isAbstract: true,
})
export class AttestationConfidenceOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => AttestationConfidenceCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: AttestationConfidenceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: AttestationConfidenceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: AttestationConfidenceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: AttestationConfidenceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: AttestationConfidenceSumOrderByAggregateInput | undefined;
}
