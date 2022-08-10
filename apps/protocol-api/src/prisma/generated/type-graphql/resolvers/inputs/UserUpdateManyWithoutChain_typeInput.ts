import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateManyChain_typeInputEnvelope } from '../inputs/UserCreateManyChain_typeInputEnvelope';
import { UserCreateOrConnectWithoutChain_typeInput } from '../inputs/UserCreateOrConnectWithoutChain_typeInput';
import { UserCreateWithoutChain_typeInput } from '../inputs/UserCreateWithoutChain_typeInput';
import { UserScalarWhereInput } from '../inputs/UserScalarWhereInput';
import { UserUpdateManyWithWhereWithoutChain_typeInput } from '../inputs/UserUpdateManyWithWhereWithoutChain_typeInput';
import { UserUpdateWithWhereUniqueWithoutChain_typeInput } from '../inputs/UserUpdateWithWhereUniqueWithoutChain_typeInput';
import { UserUpsertWithWhereUniqueWithoutChain_typeInput } from '../inputs/UserUpsertWithWhereUniqueWithoutChain_typeInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserUpdateManyWithoutChain_typeInput', {
  isAbstract: true,
})
export class UserUpdateManyWithoutChain_typeInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutChain_typeInput], {
    nullable: true,
  })
  create?: UserCreateWithoutChain_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutChain_typeInput], {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutChain_typeInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [UserUpsertWithWhereUniqueWithoutChain_typeInput],
    {
      nullable: true,
    },
  )
  upsert?: UserUpsertWithWhereUniqueWithoutChain_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyChain_typeInputEnvelope, {
    nullable: true,
  })
  createMany?: UserCreateManyChain_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [UserUpdateWithWhereUniqueWithoutChain_typeInput],
    {
      nullable: true,
    },
  )
  update?: UserUpdateWithWhereUniqueWithoutChain_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutChain_typeInput], {
    nullable: true,
  })
  updateMany?: UserUpdateManyWithWhereWithoutChain_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
