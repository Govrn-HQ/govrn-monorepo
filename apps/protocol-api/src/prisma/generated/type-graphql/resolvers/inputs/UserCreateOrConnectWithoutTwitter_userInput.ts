import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutTwitter_userInput } from '../inputs/UserCreateWithoutTwitter_userInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateOrConnectWithoutTwitter_userInput', {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutTwitter_userInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTwitter_userInput, {
    nullable: false,
  })
  create!: UserCreateWithoutTwitter_userInput;
}
