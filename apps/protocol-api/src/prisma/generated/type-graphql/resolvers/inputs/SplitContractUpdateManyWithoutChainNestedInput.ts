import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateManyChainInputEnvelope } from "../inputs/SplitContractCreateManyChainInputEnvelope";
import { SplitContractCreateOrConnectWithoutChainInput } from "../inputs/SplitContractCreateOrConnectWithoutChainInput";
import { SplitContractCreateWithoutChainInput } from "../inputs/SplitContractCreateWithoutChainInput";
import { SplitContractScalarWhereInput } from "../inputs/SplitContractScalarWhereInput";
import { SplitContractUpdateManyWithWhereWithoutChainInput } from "../inputs/SplitContractUpdateManyWithWhereWithoutChainInput";
import { SplitContractUpdateWithWhereUniqueWithoutChainInput } from "../inputs/SplitContractUpdateWithWhereUniqueWithoutChainInput";
import { SplitContractUpsertWithWhereUniqueWithoutChainInput } from "../inputs/SplitContractUpsertWithWhereUniqueWithoutChainInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractUpdateManyWithoutChainNestedInput", {
  isAbstract: true
})
export class SplitContractUpdateManyWithoutChainNestedInput {
  @TypeGraphQL.Field(_type => [SplitContractCreateWithoutChainInput], {
    nullable: true
  })
  create?: SplitContractCreateWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractCreateOrConnectWithoutChainInput], {
    nullable: true
  })
  connectOrCreate?: SplitContractCreateOrConnectWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractUpsertWithWhereUniqueWithoutChainInput], {
    nullable: true
  })
  upsert?: SplitContractUpsertWithWhereUniqueWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitContractCreateManyChainInputEnvelope, {
    nullable: true
  })
  createMany?: SplitContractCreateManyChainInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SplitContractUpdateWithWhereUniqueWithoutChainInput], {
    nullable: true
  })
  update?: SplitContractUpdateWithWhereUniqueWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractUpdateManyWithWhereWithoutChainInput], {
    nullable: true
  })
  updateMany?: SplitContractUpdateManyWithWhereWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SplitContractScalarWhereInput[] | undefined;
}
