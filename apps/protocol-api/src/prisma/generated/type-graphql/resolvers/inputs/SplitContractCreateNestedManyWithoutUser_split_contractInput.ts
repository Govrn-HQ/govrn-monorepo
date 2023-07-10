import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateManyUser_split_contractInputEnvelope } from "../inputs/SplitContractCreateManyUser_split_contractInputEnvelope";
import { SplitContractCreateOrConnectWithoutUser_split_contractInput } from "../inputs/SplitContractCreateOrConnectWithoutUser_split_contractInput";
import { SplitContractCreateWithoutUser_split_contractInput } from "../inputs/SplitContractCreateWithoutUser_split_contractInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractCreateNestedManyWithoutUser_split_contractInput", {
  isAbstract: true
})
export class SplitContractCreateNestedManyWithoutUser_split_contractInput {
  @TypeGraphQL.Field(_type => [SplitContractCreateWithoutUser_split_contractInput], {
    nullable: true
  })
  create?: SplitContractCreateWithoutUser_split_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractCreateOrConnectWithoutUser_split_contractInput], {
    nullable: true
  })
  connectOrCreate?: SplitContractCreateOrConnectWithoutUser_split_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitContractCreateManyUser_split_contractInputEnvelope, {
    nullable: true
  })
  createMany?: SplitContractCreateManyUser_split_contractInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SplitContractWhereUniqueInput], {
    nullable: true
  })
  connect?: SplitContractWhereUniqueInput[] | undefined;
}
