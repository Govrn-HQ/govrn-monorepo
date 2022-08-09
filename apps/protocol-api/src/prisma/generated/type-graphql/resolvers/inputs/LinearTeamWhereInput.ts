import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { IntFilter } from '../inputs/IntFilter';
import { LinearIssueListRelationFilter } from '../inputs/LinearIssueListRelationFilter';
import { StringFilter } from '../inputs/StringFilter';

@TypeGraphQL.InputType('LinearTeamWhereInput', {
  isAbstract: true,
})
export class LinearTeamWhereInput {
  @TypeGraphQL.Field(_type => [LinearTeamWhereInput], {
    nullable: true,
  })
  AND?: LinearTeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearTeamWhereInput], {
    nullable: true,
  })
  OR?: LinearTeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearTeamWhereInput], {
    nullable: true,
  })
  NOT?: LinearTeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  linear_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  key?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => LinearIssueListRelationFilter, {
    nullable: true,
  })
  issues?: LinearIssueListRelationFilter | undefined;
}
