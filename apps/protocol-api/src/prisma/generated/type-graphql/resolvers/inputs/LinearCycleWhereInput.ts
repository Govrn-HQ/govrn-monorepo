import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { LinearIssueListRelationFilter } from '../inputs/LinearIssueListRelationFilter';
import { StringFilter } from '../inputs/StringFilter';

@TypeGraphQL.InputType('LinearCycleWhereInput', {
  isAbstract: true,
})
export class LinearCycleWhereInput {
  @TypeGraphQL.Field(_type => [LinearCycleWhereInput], {
    nullable: true,
  })
  AND?: LinearCycleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearCycleWhereInput], {
    nullable: true,
  })
  OR?: LinearCycleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearCycleWhereInput], {
    nullable: true,
  })
  NOT?: LinearCycleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  number?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  startsAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  endsAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  linear_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => LinearIssueListRelationFilter, {
    nullable: true,
  })
  issues?: LinearIssueListRelationFilter | undefined;
}
