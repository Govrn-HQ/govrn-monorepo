import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateWithoutChainInput } from "../inputs/SplitContractCreateWithoutChainInput";
import { SplitContractUpdateWithoutChainInput } from "../inputs/SplitContractUpdateWithoutChainInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractUpsertWithWhereUniqueWithoutChainInput", {
  isAbstract: true
})
export class SplitContractUpsertWithWhereUniqueWithoutChainInput {
  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: SplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitContractUpdateWithoutChainInput, {
    nullable: false
  })
  update!: SplitContractUpdateWithoutChainInput;

  @TypeGraphQL.Field(_type => SplitContractCreateWithoutChainInput, {
    nullable: false
  })
  create!: SplitContractCreateWithoutChainInput;
}
