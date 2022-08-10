import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearUserCreateWithoutAssigned_issuesInput } from '../inputs/LinearUserCreateWithoutAssigned_issuesInput';
import { LinearUserWhereUniqueInput } from '../inputs/LinearUserWhereUniqueInput';

@TypeGraphQL.InputType('LinearUserCreateOrConnectWithoutAssigned_issuesInput', {
  isAbstract: true,
})
export class LinearUserCreateOrConnectWithoutAssigned_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearUserCreateWithoutAssigned_issuesInput, {
    nullable: false,
  })
  create!: LinearUserCreateWithoutAssigned_issuesInput;
}
