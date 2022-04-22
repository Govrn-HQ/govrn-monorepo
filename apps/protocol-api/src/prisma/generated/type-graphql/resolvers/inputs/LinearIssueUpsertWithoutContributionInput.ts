import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateWithoutContributionInput } from "../inputs/LinearIssueCreateWithoutContributionInput";
import { LinearIssueUpdateWithoutContributionInput } from "../inputs/LinearIssueUpdateWithoutContributionInput";

@TypeGraphQL.InputType("LinearIssueUpsertWithoutContributionInput", {
  isAbstract: true
})
export class LinearIssueUpsertWithoutContributionInput {
  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutContributionInput, {
    nullable: false
  })
  update!: LinearIssueUpdateWithoutContributionInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutContributionInput, {
    nullable: false
  })
  create!: LinearIssueCreateWithoutContributionInput;
}
