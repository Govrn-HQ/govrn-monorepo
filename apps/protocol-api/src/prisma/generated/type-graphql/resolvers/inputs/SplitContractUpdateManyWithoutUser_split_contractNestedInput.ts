import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateManyUser_split_contractInputEnvelope } from "../inputs/SplitContractCreateManyUser_split_contractInputEnvelope";
import { SplitContractCreateOrConnectWithoutUser_split_contractInput } from "../inputs/SplitContractCreateOrConnectWithoutUser_split_contractInput";
import { SplitContractCreateWithoutUser_split_contractInput } from "../inputs/SplitContractCreateWithoutUser_split_contractInput";
import { SplitContractScalarWhereInput } from "../inputs/SplitContractScalarWhereInput";
import { SplitContractUpdateManyWithWhereWithoutUser_split_contractInput } from "../inputs/SplitContractUpdateManyWithWhereWithoutUser_split_contractInput";
import { SplitContractUpdateWithWhereUniqueWithoutUser_split_contractInput } from "../inputs/SplitContractUpdateWithWhereUniqueWithoutUser_split_contractInput";
import { SplitContractUpsertWithWhereUniqueWithoutUser_split_contractInput } from "../inputs/SplitContractUpsertWithWhereUniqueWithoutUser_split_contractInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractUpdateManyWithoutUser_split_contractNestedInput", {
  isAbstract: true
})
export class SplitContractUpdateManyWithoutUser_split_contractNestedInput {
  @TypeGraphQL.Field(_type => [SplitContractCreateWithoutUser_split_contractInput], {
    nullable: true
  })
  create?: SplitContractCreateWithoutUser_split_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractCreateOrConnectWithoutUser_split_contractInput], {
    nullable: true
  })
  connectOrCreate?: SplitContractCreateOrConnectWithoutUser_split_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractUpsertWithWhereUniqueWithoutUser_split_contractInput], {
    nullable: true
  })
  upsert?: SplitContractUpsertWithWhereUniqueWithoutUser_split_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitContractCreateManyUser_split_contractInputEnvelope, {
    nullable: true
  })
  createMany?: SplitContractCreateManyUser_split_contractInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SplitContractWhereUniqueInput], {
    nullable: true
  })
  set?: SplitContractWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SplitContractWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractWhereUniqueInput], {
    nullable: true
  })
  delete?: SplitContractWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractWhereUniqueInput], {
    nullable: true
  })
  connect?: SplitContractWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractUpdateWithWhereUniqueWithoutUser_split_contractInput], {
    nullable: true
  })
  update?: SplitContractUpdateWithWhereUniqueWithoutUser_split_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractUpdateManyWithWhereWithoutUser_split_contractInput], {
    nullable: true
  })
  updateMany?: SplitContractUpdateManyWithWhereWithoutUser_split_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SplitContractScalarWhereInput[] | undefined;
}
