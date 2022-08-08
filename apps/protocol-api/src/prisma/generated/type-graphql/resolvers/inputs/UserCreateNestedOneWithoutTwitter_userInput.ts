import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutTwitter_userInput } from '../inputs/UserCreateOrConnectWithoutTwitter_userInput';
import { UserCreateWithoutTwitter_userInput } from '../inputs/UserCreateWithoutTwitter_userInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateNestedOneWithoutTwitter_userInput', {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutTwitter_userInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTwitter_userInput, {
    nullable: true,
  })
  create?: UserCreateWithoutTwitter_userInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTwitter_userInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutTwitter_userInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
