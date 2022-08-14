import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateManyTeamInputEnvelope } from "../inputs/LinearIssueCreateManyTeamInputEnvelope";
import { LinearIssueCreateOrConnectWithoutTeamInput } from "../inputs/LinearIssueCreateOrConnectWithoutTeamInput";
import { LinearIssueCreateWithoutTeamInput } from "../inputs/LinearIssueCreateWithoutTeamInput";
import { LinearIssueScalarWhereInput } from "../inputs/LinearIssueScalarWhereInput";
import { LinearIssueUpdateManyWithWhereWithoutTeamInput } from "../inputs/LinearIssueUpdateManyWithWhereWithoutTeamInput";
import { LinearIssueUpdateWithWhereUniqueWithoutTeamInput } from "../inputs/LinearIssueUpdateWithWhereUniqueWithoutTeamInput";
import { LinearIssueUpsertWithWhereUniqueWithoutTeamInput } from "../inputs/LinearIssueUpsertWithWhereUniqueWithoutTeamInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpdateManyWithoutTeamInput", {
  isAbstract: true
})
export class LinearIssueUpdateManyWithoutTeamInput {
  @TypeGraphQL.Field(_type => [LinearIssueCreateWithoutTeamInput], {
    nullable: true
  })
  create?: LinearIssueCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueCreateOrConnectWithoutTeamInput], {
    nullable: true
  })
  connectOrCreate?: LinearIssueCreateOrConnectWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueUpsertWithWhereUniqueWithoutTeamInput], {
    nullable: true
  })
  upsert?: LinearIssueUpsertWithWhereUniqueWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateManyTeamInputEnvelope, {
    nullable: true
  })
  createMany?: LinearIssueCreateManyTeamInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LinearIssueUpdateWithWhereUniqueWithoutTeamInput], {
    nullable: true
  })
  update?: LinearIssueUpdateWithWhereUniqueWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueUpdateManyWithWhereWithoutTeamInput], {
    nullable: true
  })
  updateMany?: LinearIssueUpdateManyWithWhereWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LinearIssueScalarWhereInput[] | undefined;
}
