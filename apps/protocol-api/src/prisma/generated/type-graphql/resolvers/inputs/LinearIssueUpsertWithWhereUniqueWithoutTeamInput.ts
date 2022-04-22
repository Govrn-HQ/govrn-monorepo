import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateWithoutTeamInput } from "../inputs/LinearIssueCreateWithoutTeamInput";
import { LinearIssueUpdateWithoutTeamInput } from "../inputs/LinearIssueUpdateWithoutTeamInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpsertWithWhereUniqueWithoutTeamInput", {
  isAbstract: true
})
export class LinearIssueUpsertWithWhereUniqueWithoutTeamInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutTeamInput, {
    nullable: false
  })
  update!: LinearIssueUpdateWithoutTeamInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutTeamInput, {
    nullable: false
  })
  create!: LinearIssueCreateWithoutTeamInput;
}
