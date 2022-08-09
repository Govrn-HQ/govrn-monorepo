import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearUserCreateWithoutAssigned_issuesInput } from '../inputs/LinearUserCreateWithoutAssigned_issuesInput';
import { LinearUserUpdateWithoutAssigned_issuesInput } from '../inputs/LinearUserUpdateWithoutAssigned_issuesInput';

@TypeGraphQL.InputType('LinearUserUpsertWithoutAssigned_issuesInput', {
  isAbstract: true,
})
export class LinearUserUpsertWithoutAssigned_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserUpdateWithoutAssigned_issuesInput, {
    nullable: false,
  })
  update!: LinearUserUpdateWithoutAssigned_issuesInput;

  @TypeGraphQL.Field(_type => LinearUserCreateWithoutAssigned_issuesInput, {
    nullable: false,
  })
  create!: LinearUserCreateWithoutAssigned_issuesInput;
}
