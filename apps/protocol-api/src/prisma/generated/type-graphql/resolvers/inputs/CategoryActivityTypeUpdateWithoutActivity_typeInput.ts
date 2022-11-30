import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityUpdateOneRequiredWithoutActivityTypesNestedInput } from "../inputs/CategoryActivityUpdateOneRequiredWithoutActivityTypesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategoryActivityTypeUpdateWithoutActivity_typeInput", {
  isAbstract: true
})
export class CategoryActivityTypeUpdateWithoutActivity_typeInput {
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
}
