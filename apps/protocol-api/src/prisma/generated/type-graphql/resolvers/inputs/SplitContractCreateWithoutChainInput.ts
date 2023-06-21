import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateNestedManyWithoutSplit_contractInput } from "../inputs/SplitPaymentCreateNestedManyWithoutSplit_contractInput";
import { UserSplitContractCreateNestedOneWithoutSplit_contractInput } from "../inputs/UserSplitContractCreateNestedOneWithoutSplit_contractInput";

@TypeGraphQL.InputType("SplitContractCreateWithoutChainInput", {
  isAbstract: true
})
export class SplitContractCreateWithoutChainInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tx_hash!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enabled!: boolean;

  @TypeGraphQL.Field(_type => SplitPaymentCreateNestedManyWithoutSplit_contractInput, {
    nullable: true
  })
  split_payments?: SplitPaymentCreateNestedManyWithoutSplit_contractInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractCreateNestedOneWithoutSplit_contractInput, {
    nullable: true
  })
  user_split_contract?: UserSplitContractCreateNestedOneWithoutSplit_contractInput | undefined;
}
