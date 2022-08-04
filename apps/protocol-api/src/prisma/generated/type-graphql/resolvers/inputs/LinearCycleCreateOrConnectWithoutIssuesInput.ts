import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearCycleCreateWithoutIssuesInput } from '../inputs/LinearCycleCreateWithoutIssuesInput';
import { LinearCycleWhereUniqueInput } from '../inputs/LinearCycleWhereUniqueInput';

@TypeGraphQL.InputType('LinearCycleCreateOrConnectWithoutIssuesInput', {
  isAbstract: true,
})
export class LinearCycleCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearCycleWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearCycleWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearCycleCreateWithoutIssuesInput, {
    nullable: false,
  })
  create!: LinearCycleCreateWithoutIssuesInput;
}
