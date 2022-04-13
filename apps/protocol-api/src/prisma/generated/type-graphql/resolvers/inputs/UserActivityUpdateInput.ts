import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneRequiredWithoutUsersInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutUsersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActivitiesInput } from "../inputs/UserUpdateOneRequiredWithoutActivitiesInput";

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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutActivitiesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneRequiredWithoutUsersInput, {
    nullable: true
  })
  activity_type?: ActivityTypeUpdateOneRequiredWithoutUsersInput | undefined;
}
