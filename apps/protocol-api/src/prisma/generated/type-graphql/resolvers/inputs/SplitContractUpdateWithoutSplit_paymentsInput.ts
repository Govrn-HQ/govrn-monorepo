import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ChainUpdateOneRequiredWithoutSplit_contractsNestedInput } from "../inputs/ChainUpdateOneRequiredWithoutSplit_contractsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserSplitContractUpdateOneWithoutSplit_contractNestedInput } from "../inputs/UserSplitContractUpdateOneWithoutSplit_contractNestedInput";

@TypeGraphQL.InputType("SplitContractUpdateWithoutSplit_paymentsInput", {
  isAbstract: true
})
export class SplitContractUpdateWithoutSplit_paymentsInput {
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

  @TypeGraphQL.Field(_type => UserSplitContractUpdateOneWithoutSplit_contractNestedInput, {
    nullable: true
  })
  user_split_contract?: UserSplitContractUpdateOneWithoutSplit_contractNestedInput | undefined;
}
