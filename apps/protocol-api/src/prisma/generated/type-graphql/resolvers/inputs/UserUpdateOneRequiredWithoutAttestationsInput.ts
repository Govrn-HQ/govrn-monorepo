import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutAttestationsInput } from '../inputs/UserCreateOrConnectWithoutAttestationsInput';
import { UserCreateWithoutAttestationsInput } from '../inputs/UserCreateWithoutAttestationsInput';
import { UserUpdateWithoutAttestationsInput } from '../inputs/UserUpdateWithoutAttestationsInput';
import { UserUpsertWithoutAttestationsInput } from '../inputs/UserUpsertWithoutAttestationsInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserUpdateOneRequiredWithoutAttestationsInput', {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAttestationsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAttestationsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAttestationsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAttestationsInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutAttestationsInput | undefined;
}
