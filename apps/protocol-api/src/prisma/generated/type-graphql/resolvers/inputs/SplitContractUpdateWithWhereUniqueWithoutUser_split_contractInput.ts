import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractUpdateWithoutUser_split_contractInput } from "../inputs/SplitContractUpdateWithoutUser_split_contractInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractUpdateWithWhereUniqueWithoutUser_split_contractInput", {
  isAbstract: true
})
export class SplitContractUpdateWithWhereUniqueWithoutUser_split_contractInput {
  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: SplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitContractUpdateWithoutUser_split_contractInput, {
    nullable: false
  })
  data!: SplitContractUpdateWithoutUser_split_contractInput;
}
