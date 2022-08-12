import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateManyCreatorInputEnvelope } from "../inputs/LinearIssueCreateManyCreatorInputEnvelope";
import { LinearIssueCreateOrConnectWithoutCreatorInput } from "../inputs/LinearIssueCreateOrConnectWithoutCreatorInput";
import { LinearIssueCreateWithoutCreatorInput } from "../inputs/LinearIssueCreateWithoutCreatorInput";
import { LinearIssueScalarWhereInput } from "../inputs/LinearIssueScalarWhereInput";
import { LinearIssueUpdateManyWithWhereWithoutCreatorInput } from "../inputs/LinearIssueUpdateManyWithWhereWithoutCreatorInput";
import { LinearIssueUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/LinearIssueUpdateWithWhereUniqueWithoutCreatorInput";
import { LinearIssueUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/LinearIssueUpsertWithWhereUniqueWithoutCreatorInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpdateManyWithoutCreatorInput", {
  isAbstract: true
})
export class LinearIssueUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [LinearIssueCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: LinearIssueCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: LinearIssueCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: LinearIssueUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: LinearIssueCreateManyCreatorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LinearIssueUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: LinearIssueUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: LinearIssueUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LinearIssueScalarWhereInput[] | undefined;
}
