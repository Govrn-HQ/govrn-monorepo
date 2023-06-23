import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateWithoutUser_split_contractInput } from "../inputs/SplitContractCreateWithoutUser_split_contractInput";
import { SplitContractUpdateWithoutUser_split_contractInput } from "../inputs/SplitContractUpdateWithoutUser_split_contractInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractUpsertWithWhereUniqueWithoutUser_split_contractInput", {
  isAbstract: true
})
export class SplitContractUpsertWithWhereUniqueWithoutUser_split_contractInput {
  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: SplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitContractUpdateWithoutUser_split_contractInput, {
    nullable: false
  })
  update!: SplitContractUpdateWithoutUser_split_contractInput;

  @TypeGraphQL.Field(_type => SplitContractCreateWithoutUser_split_contractInput, {
    nullable: false
  })
  create!: SplitContractCreateWithoutUser_split_contractInput;
}
