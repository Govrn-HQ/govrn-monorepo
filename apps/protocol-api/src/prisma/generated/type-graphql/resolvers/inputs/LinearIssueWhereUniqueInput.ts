import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.InputType('LinearIssueWhereUniqueInput', {
  isAbstract: true,
})
export class LinearIssueWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  linear_id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  contribution_id?: number | undefined;
}
