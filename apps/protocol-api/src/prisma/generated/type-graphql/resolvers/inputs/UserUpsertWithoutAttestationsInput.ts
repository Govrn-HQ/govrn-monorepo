import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutAttestationsInput } from '../inputs/UserCreateWithoutAttestationsInput';
import { UserUpdateWithoutAttestationsInput } from '../inputs/UserUpdateWithoutAttestationsInput';

@TypeGraphQL.InputType('UserUpsertWithoutAttestationsInput', {
  isAbstract: true,
})
export class UserUpsertWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutAttestationsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutAttestationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAttestationsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutAttestationsInput;
}
