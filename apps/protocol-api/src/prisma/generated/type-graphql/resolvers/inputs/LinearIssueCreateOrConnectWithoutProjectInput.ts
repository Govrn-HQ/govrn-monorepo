import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateWithoutProjectInput } from '../inputs/LinearIssueCreateWithoutProjectInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueCreateOrConnectWithoutProjectInput', {
  isAbstract: true,
})
export class LinearIssueCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutProjectInput, {
    nullable: false,
  })
  create!: LinearIssueCreateWithoutProjectInput;
}
