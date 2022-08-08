import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearProjectCreateWithoutIssuesInput } from '../inputs/LinearProjectCreateWithoutIssuesInput';
import { LinearProjectWhereUniqueInput } from '../inputs/LinearProjectWhereUniqueInput';

@TypeGraphQL.InputType('LinearProjectCreateOrConnectWithoutIssuesInput', {
  isAbstract: true,
})
export class LinearProjectCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearProjectWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearProjectCreateWithoutIssuesInput, {
    nullable: false,
  })
  create!: LinearProjectCreateWithoutIssuesInput;
}
