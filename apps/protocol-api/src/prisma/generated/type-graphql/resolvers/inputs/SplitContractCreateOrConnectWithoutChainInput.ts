import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateWithoutChainInput } from "../inputs/SplitContractCreateWithoutChainInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractCreateOrConnectWithoutChainInput", {
  isAbstract: true
})
export class SplitContractCreateOrConnectWithoutChainInput {
  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: SplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitContractCreateWithoutChainInput, {
    nullable: false
  })
  create!: SplitContractCreateWithoutChainInput;
}
