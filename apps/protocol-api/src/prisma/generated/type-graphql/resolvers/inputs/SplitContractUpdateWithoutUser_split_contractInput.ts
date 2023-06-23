import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ChainUpdateOneRequiredWithoutSplit_contractsNestedInput } from "../inputs/ChainUpdateOneRequiredWithoutSplit_contractsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SplitPaymentUpdateManyWithoutSplit_contractNestedInput } from "../inputs/SplitPaymentUpdateManyWithoutSplit_contractNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SplitContractUpdateWithoutUser_split_contractInput", {
  isAbstract: true
})
export class SplitContractUpdateWithoutUser_split_contractInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpdateOneRequiredWithoutSplit_contractsNestedInput, {
    nullable: true
  })
  chain?: ChainUpdateOneRequiredWithoutSplit_contractsNestedInput | undefined;

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
}
