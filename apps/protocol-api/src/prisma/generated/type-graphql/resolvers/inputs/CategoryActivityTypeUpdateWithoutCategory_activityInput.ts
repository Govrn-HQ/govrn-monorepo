import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategoryActivityTypeUpdateWithoutCategory_activityInput", {
  isAbstract: true
})
export class CategoryActivityTypeUpdateWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput, {
    nullable: true
  })
  activity_type?: ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput | undefined;
}
