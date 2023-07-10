import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateWithoutSplit_paymentsInput } from "../inputs/SplitContractCreateWithoutSplit_paymentsInput";
import { SplitContractUpdateWithoutSplit_paymentsInput } from "../inputs/SplitContractUpdateWithoutSplit_paymentsInput";

@TypeGraphQL.InputType("SplitContractUpsertWithoutSplit_paymentsInput", {
  isAbstract: true
})
export class SplitContractUpsertWithoutSplit_paymentsInput {
  @TypeGraphQL.Field(_type => SplitContractUpdateWithoutSplit_paymentsInput, {
    nullable: false
  })
  update!: SplitContractUpdateWithoutSplit_paymentsInput;

  @TypeGraphQL.Field(_type => SplitContractCreateWithoutSplit_paymentsInput, {
    nullable: false
  })
  create!: SplitContractCreateWithoutSplit_paymentsInput;
}
