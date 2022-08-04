import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { BoolFieldUpdateOperationsInput } from '../inputs/BoolFieldUpdateOperationsInput';
import { LinearIssueUpdateManyWithoutAssigneeInput } from '../inputs/LinearIssueUpdateManyWithoutAssigneeInput';
import { NullableBoolFieldUpdateOperationsInput } from '../inputs/NullableBoolFieldUpdateOperationsInput';
import { NullableDateTimeFieldUpdateOperationsInput } from '../inputs/NullableDateTimeFieldUpdateOperationsInput';
import { NullableStringFieldUpdateOperationsInput } from '../inputs/NullableStringFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';
import { UserUpdateOneWithoutLinear_usersInput } from '../inputs/UserUpdateOneWithoutLinear_usersInput';

@TypeGraphQL.InputType('LinearUserUpdateWithoutCreated_issuesInput', {
  isAbstract: true,
})
export class LinearUserUpdateWithoutCreated_issuesInput {
  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  displayName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  linear_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  url?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  access_token?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  active_token?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutLinear_usersInput, {
    nullable: true,
  })
  user?: UserUpdateOneWithoutLinear_usersInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueUpdateManyWithoutAssigneeInput, {
    nullable: true,
  })
  assigned_issues?: LinearIssueUpdateManyWithoutAssigneeInput | undefined;
}
