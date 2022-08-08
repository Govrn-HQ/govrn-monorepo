import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateWithoutCreatorInput } from '../inputs/LinearIssueCreateWithoutCreatorInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueCreateOrConnectWithoutCreatorInput', {
  isAbstract: true,
})
export class LinearIssueCreateOrConnectWithoutCreatorInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutCreatorInput, {
    nullable: false,
  })
  create!: LinearIssueCreateWithoutCreatorInput;
}
