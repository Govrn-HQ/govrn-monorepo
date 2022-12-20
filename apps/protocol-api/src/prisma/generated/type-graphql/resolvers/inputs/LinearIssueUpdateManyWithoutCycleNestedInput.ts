import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateManyCycleInputEnvelope } from "../inputs/LinearIssueCreateManyCycleInputEnvelope";
import { LinearIssueCreateOrConnectWithoutCycleInput } from "../inputs/LinearIssueCreateOrConnectWithoutCycleInput";
import { LinearIssueCreateWithoutCycleInput } from "../inputs/LinearIssueCreateWithoutCycleInput";
import { LinearIssueScalarWhereInput } from "../inputs/LinearIssueScalarWhereInput";
import { LinearIssueUpdateManyWithWhereWithoutCycleInput } from "../inputs/LinearIssueUpdateManyWithWhereWithoutCycleInput";
import { LinearIssueUpdateWithWhereUniqueWithoutCycleInput } from "../inputs/LinearIssueUpdateWithWhereUniqueWithoutCycleInput";
import { LinearIssueUpsertWithWhereUniqueWithoutCycleInput } from "../inputs/LinearIssueUpsertWithWhereUniqueWithoutCycleInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpdateManyWithoutCycleNestedInput", {
  isAbstract: true
})
export class LinearIssueUpdateManyWithoutCycleNestedInput {
  @TypeGraphQL.Field(_type => [LinearIssueCreateWithoutCycleInput], {
    nullable: true
  })
  create?: LinearIssueCreateWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueCreateOrConnectWithoutCycleInput], {
    nullable: true
  })
  connectOrCreate?: LinearIssueCreateOrConnectWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueUpsertWithWhereUniqueWithoutCycleInput], {
    nullable: true
  })
  upsert?: LinearIssueUpsertWithWhereUniqueWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateManyCycleInputEnvelope, {
    nullable: true
  })
  createMany?: LinearIssueCreateManyCycleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true
  })
  set?: LinearIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LinearIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true
  })
  delete?: LinearIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true
  })
  connect?: LinearIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueUpdateWithWhereUniqueWithoutCycleInput], {
    nullable: true
  })
  update?: LinearIssueUpdateWithWhereUniqueWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueUpdateManyWithWhereWithoutCycleInput], {
    nullable: true
  })
  updateMany?: LinearIssueUpdateManyWithWhereWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LinearIssueScalarWhereInput[] | undefined;
}
