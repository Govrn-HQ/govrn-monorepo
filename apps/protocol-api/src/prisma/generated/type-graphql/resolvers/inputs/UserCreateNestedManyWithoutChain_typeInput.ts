import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateManyChain_typeInputEnvelope } from '../inputs/UserCreateManyChain_typeInputEnvelope';
import { UserCreateOrConnectWithoutChain_typeInput } from '../inputs/UserCreateOrConnectWithoutChain_typeInput';
import { UserCreateWithoutChain_typeInput } from '../inputs/UserCreateWithoutChain_typeInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateNestedManyWithoutChain_typeInput', {
  isAbstract: true,
})
export class UserCreateNestedManyWithoutChain_typeInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutChain_typeInput], {
    nullable: true,
  })
  create?: UserCreateWithoutChain_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutChain_typeInput], {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutChain_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyChain_typeInputEnvelope, {
    nullable: true,
  })
  createMany?: UserCreateManyChain_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
