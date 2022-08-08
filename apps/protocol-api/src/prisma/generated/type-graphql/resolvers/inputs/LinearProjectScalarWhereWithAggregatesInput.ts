import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';
import { StringWithAggregatesFilter } from '../inputs/StringWithAggregatesFilter';

@TypeGraphQL.InputType('LinearProjectScalarWhereWithAggregatesInput', {
  isAbstract: true,
})
export class LinearProjectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LinearProjectScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: LinearProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearProjectScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: LinearProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearProjectScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: LinearProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  linear_id?: StringWithAggregatesFilter | undefined;
}
