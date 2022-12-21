import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneRequiredWithoutUsersNestedInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutUsersNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActivitiesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutActivitiesNestedInput";

@TypeGraphQL.InputType("UserActivityUpdateInput", {
  isAbstract: true
})
export class UserActivityUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutActivitiesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutActivitiesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneRequiredWithoutUsersNestedInput, {
    nullable: true
  })
  activity_type?: ActivityTypeUpdateOneRequiredWithoutUsersNestedInput | undefined;
}
