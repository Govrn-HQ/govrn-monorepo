import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueWhereInput } from '../inputs/LinearIssueWhereInput';

@TypeGraphQL.InputType('LinearIssueRelationFilter', {
  isAbstract: true,
})
export class LinearIssueRelationFilter {
  @TypeGraphQL.Field(_type => LinearIssueWhereInput, {
    nullable: true,
  })
  is?: LinearIssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueWhereInput, {
    nullable: true,
  })
  isNot?: LinearIssueWhereInput | undefined;
}
