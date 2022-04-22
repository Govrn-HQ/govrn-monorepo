import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueUpdateWithoutTeamInput } from "../inputs/LinearIssueUpdateWithoutTeamInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpdateWithWhereUniqueWithoutTeamInput", {
  isAbstract: true
})
export class LinearIssueUpdateWithWhereUniqueWithoutTeamInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutTeamInput, {
    nullable: false
  })
  data!: LinearIssueUpdateWithoutTeamInput;
}
