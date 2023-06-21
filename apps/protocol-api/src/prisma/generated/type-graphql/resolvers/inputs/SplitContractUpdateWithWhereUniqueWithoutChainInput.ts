import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractUpdateWithoutChainInput } from "../inputs/SplitContractUpdateWithoutChainInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractUpdateWithWhereUniqueWithoutChainInput", {
  isAbstract: true
})
export class SplitContractUpdateWithWhereUniqueWithoutChainInput {
  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: SplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitContractUpdateWithoutChainInput, {
    nullable: false
  })
  data!: SplitContractUpdateWithoutChainInput;
}
