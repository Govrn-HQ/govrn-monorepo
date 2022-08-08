import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserActivityCreateWithoutUserInput } from '../inputs/UserActivityCreateWithoutUserInput';
import { UserActivityWhereUniqueInput } from '../inputs/UserActivityWhereUniqueInput';

@TypeGraphQL.InputType('UserActivityCreateOrConnectWithoutUserInput', {
  isAbstract: true,
})
export class UserActivityCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: UserActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserActivityCreateWithoutUserInput, {
    nullable: false,
  })
  create!: UserActivityCreateWithoutUserInput;
}
