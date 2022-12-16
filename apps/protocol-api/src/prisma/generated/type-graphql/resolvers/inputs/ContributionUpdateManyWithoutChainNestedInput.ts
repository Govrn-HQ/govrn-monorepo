import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateManyChainInputEnvelope } from "../inputs/ContributionCreateManyChainInputEnvelope";
import { ContributionCreateOrConnectWithoutChainInput } from "../inputs/ContributionCreateOrConnectWithoutChainInput";
import { ContributionCreateWithoutChainInput } from "../inputs/ContributionCreateWithoutChainInput";
import { ContributionScalarWhereInput } from "../inputs/ContributionScalarWhereInput";
import { ContributionUpdateManyWithWhereWithoutChainInput } from "../inputs/ContributionUpdateManyWithWhereWithoutChainInput";
import { ContributionUpdateWithWhereUniqueWithoutChainInput } from "../inputs/ContributionUpdateWithWhereUniqueWithoutChainInput";
import { ContributionUpsertWithWhereUniqueWithoutChainInput } from "../inputs/ContributionUpsertWithWhereUniqueWithoutChainInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpdateManyWithoutChainNestedInput", {
  isAbstract: true
})
export class ContributionUpdateManyWithoutChainNestedInput {
  @TypeGraphQL.Field(_type => [ContributionCreateWithoutChainInput], {
    nullable: true
  })
  create?: ContributionCreateWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionCreateOrConnectWithoutChainInput], {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionUpsertWithWhereUniqueWithoutChainInput], {
    nullable: true
  })
  upsert?: ContributionUpsertWithWhereUniqueWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateManyChainInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionCreateManyChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  set?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  delete?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionUpdateWithWhereUniqueWithoutChainInput], {
    nullable: true
  })
  update?: ContributionUpdateWithWhereUniqueWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionUpdateManyWithWhereWithoutChainInput], {
    nullable: true
  })
  updateMany?: ContributionUpdateManyWithWhereWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ContributionScalarWhereInput[] | undefined;
}
