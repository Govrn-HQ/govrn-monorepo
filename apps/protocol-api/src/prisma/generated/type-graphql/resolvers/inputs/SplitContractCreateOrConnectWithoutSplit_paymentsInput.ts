import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateWithoutSplit_paymentsInput } from "../inputs/SplitContractCreateWithoutSplit_paymentsInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractCreateOrConnectWithoutSplit_paymentsInput", {
  isAbstract: true
})
export class SplitContractCreateOrConnectWithoutSplit_paymentsInput {
  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: SplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitContractCreateWithoutSplit_paymentsInput, {
    nullable: false
  })
  create!: SplitContractCreateWithoutSplit_paymentsInput;
}
