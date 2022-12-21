import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategoryActivityTypeUpdateManyWithoutActivity_typeNestedInput } from "../inputs/CategoryActivityTypeUpdateManyWithoutActivity_typeNestedInput";
import { ContributionUpdateManyWithoutActivity_typeNestedInput } from "../inputs/ContributionUpdateManyWithoutActivity_typeNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserActivityUpdateManyWithoutActivity_typeNestedInput } from "../inputs/UserActivityUpdateManyWithoutActivity_typeNestedInput";

@TypeGraphQL.InputType("ActivityTypeUpdateWithoutGuildsInput", {
  isAbstract: true
})
export class ActivityTypeUpdateWithoutGuildsInput {
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

  @TypeGraphQL.Field(_type => UserActivityUpdateManyWithoutActivity_typeNestedInput, {
    nullable: true
  })
  users?: UserActivityUpdateManyWithoutActivity_typeNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateManyWithoutActivity_typeNestedInput, {
    nullable: true
  })
  contributions?: ContributionUpdateManyWithoutActivity_typeNestedInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeUpdateManyWithoutActivity_typeNestedInput, {
    nullable: true
  })
  categoryActivity?: CategoryActivityTypeUpdateManyWithoutActivity_typeNestedInput | undefined;
}
