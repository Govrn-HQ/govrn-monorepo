import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SplitPaymentUpdateManyWithoutSplit_contractNestedInput } from "../inputs/SplitPaymentUpdateManyWithoutSplit_contractNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserSplitContractUpdateOneWithoutSplit_contractNestedInput } from "../inputs/UserSplitContractUpdateOneWithoutSplit_contractNestedInput";

@TypeGraphQL.InputType("SplitContractUpdateWithoutChainInput", {
  isAbstract: true
})
export class SplitContractUpdateWithoutChainInput {
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
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tx_hash?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  enabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentUpdateManyWithoutSplit_contractNestedInput, {
    nullable: true
  })
  split_payments?: SplitPaymentUpdateManyWithoutSplit_contractNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractUpdateOneWithoutSplit_contractNestedInput, {
    nullable: true
  })
  user_split_contract?: UserSplitContractUpdateOneWithoutSplit_contractNestedInput | undefined;
}
