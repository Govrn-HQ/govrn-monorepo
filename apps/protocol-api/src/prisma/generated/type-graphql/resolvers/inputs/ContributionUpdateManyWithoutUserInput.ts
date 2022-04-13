import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateManyUserInputEnvelope } from "../inputs/ContributionCreateManyUserInputEnvelope";
import { ContributionCreateOrConnectWithoutUserInput } from "../inputs/ContributionCreateOrConnectWithoutUserInput";
import { ContributionCreateWithoutUserInput } from "../inputs/ContributionCreateWithoutUserInput";
import { ContributionScalarWhereInput } from "../inputs/ContributionScalarWhereInput";
import { ContributionUpdateManyWithWhereWithoutUserInput } from "../inputs/ContributionUpdateManyWithWhereWithoutUserInput";
import { ContributionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ContributionUpdateWithWhereUniqueWithoutUserInput";
import { ContributionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ContributionUpsertWithWhereUniqueWithoutUserInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ContributionUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ContributionCreateWithoutUserInput], {
    nullable: true
  })
  create?: ContributionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ContributionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ContributionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ContributionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ContributionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ContributionScalarWhereInput[] | undefined;
}
