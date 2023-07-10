import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SplitContractUpdateManyWithoutUser_split_contractNestedInput } from "../inputs/SplitContractUpdateManyWithoutUser_split_contractNestedInput";
import { UserUpdateOneRequiredWithoutSplit_contractsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutSplit_contractsNestedInput";

@TypeGraphQL.InputType("UserSplitContractUpdateInput", {
  isAbstract: true
})
export class UserSplitContractUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSplit_contractsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutSplit_contractsNestedInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  enabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractUpdateManyWithoutUser_split_contractNestedInput, {
    nullable: true
  })
  split_contract?: SplitContractUpdateManyWithoutUser_split_contractNestedInput | undefined;
}
