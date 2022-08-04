import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { IntFilter } from '../inputs/IntFilter';
import { LinearIssueListRelationFilter } from '../inputs/LinearIssueListRelationFilter';
import { StringFilter } from '../inputs/StringFilter';

@TypeGraphQL.InputType('LinearProjectWhereInput', {
  isAbstract: true,
})
export class LinearProjectWhereInput {
  @TypeGraphQL.Field(_type => [LinearProjectWhereInput], {
    nullable: true,
  })
  AND?: LinearProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearProjectWhereInput], {
    nullable: true,
  })
  OR?: LinearProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearProjectWhereInput], {
    nullable: true,
  })
  NOT?: LinearProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  linear_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => LinearIssueListRelationFilter, {
    nullable: true,
  })
  issues?: LinearIssueListRelationFilter | undefined;
}
