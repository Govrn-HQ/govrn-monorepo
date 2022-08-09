import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';
import { StringWithAggregatesFilter } from '../inputs/StringWithAggregatesFilter';

@TypeGraphQL.InputType('CategoryActivityScalarWhereWithAggregatesInput', {
  isAbstract: true,
})
export class CategoryActivityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(
    _type => [CategoryActivityScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  AND?: CategoryActivityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [CategoryActivityScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  OR?: CategoryActivityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [CategoryActivityScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  NOT?: CategoryActivityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;
}
