import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { BoolFieldUpdateOperationsInput } from '../inputs/BoolFieldUpdateOperationsInput';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { NullableStringFieldUpdateOperationsInput } from '../inputs/NullableStringFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';

@TypeGraphQL.InputType('UserUpdateManyMutationInput', {
  isAbstract: true,
})
export class UserUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  display_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  full_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;
}
