import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { UserUpdateOneRequiredWithoutActivitiesInput } from '../inputs/UserUpdateOneRequiredWithoutActivitiesInput';

@TypeGraphQL.InputType('UserActivityUpdateWithoutActivity_typeInput', {
  isAbstract: true,
})
export class UserActivityUpdateWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutActivitiesInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutActivitiesInput | undefined;
}
