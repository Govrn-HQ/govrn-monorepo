import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput";
import { CategoryActivityUpdateOneRequiredWithoutActivityTypesNestedInput } from "../inputs/CategoryActivityUpdateOneRequiredWithoutActivityTypesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategoryActivityTypeUpdateInput", {
  isAbstract: true
})
export class CategoryActivityTypeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityUpdateOneRequiredWithoutActivityTypesNestedInput, {
    nullable: true
  })
  category_activity?: CategoryActivityUpdateOneRequiredWithoutActivityTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput, {
    nullable: true
  })
  activity_type?: ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput | undefined;
}
