import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateNestedOneWithoutSplit_contractsInput } from "../inputs/ChainCreateNestedOneWithoutSplit_contractsInput";
import { UserSplitContractCreateNestedOneWithoutSplit_contractInput } from "../inputs/UserSplitContractCreateNestedOneWithoutSplit_contractInput";

@TypeGraphQL.InputType("SplitContractCreateWithoutSplit_paymentsInput", {
  isAbstract: true
})
export class SplitContractCreateWithoutSplit_paymentsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ChainCreateNestedOneWithoutSplit_contractsInput, {
    nullable: false
  })
  chain!: ChainCreateNestedOneWithoutSplit_contractsInput;

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

  @TypeGraphQL.Field(_type => UserSplitContractCreateNestedOneWithoutSplit_contractInput, {
    nullable: true
  })
  user_split_contract?: UserSplitContractCreateNestedOneWithoutSplit_contractInput | undefined;
}
