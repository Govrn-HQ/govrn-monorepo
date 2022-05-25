import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ContributionUpdateManyWithoutActivity_typeInput } from "../inputs/ContributionUpdateManyWithoutActivity_typeInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserActivityUpdateManyWithoutActivity_typeInput } from "../inputs/UserActivityUpdateManyWithoutActivity_typeInput";

@TypeGraphQL.InputType("ActivityTypeUpdateWithoutCategoryActivityInput", {
  isAbstract: true
})
export class ActivityTypeUpdateWithoutCategoryActivityInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  default?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserActivityUpdateManyWithoutActivity_typeInput, {
    nullable: true
  })
  users?: UserActivityUpdateManyWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateManyWithoutActivity_typeInput, {
    nullable: true
  })
  contributions?: ContributionUpdateManyWithoutActivity_typeInput | undefined;
}
