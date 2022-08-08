import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateWithoutAssigneeInput } from "../inputs/LinearIssueCreateWithoutAssigneeInput";
import { LinearIssueUpdateWithoutAssigneeInput } from "../inputs/LinearIssueUpdateWithoutAssigneeInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpsertWithWhereUniqueWithoutAssigneeInput", {
  isAbstract: true
})
export class LinearIssueUpsertWithWhereUniqueWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutAssigneeInput, {
    nullable: false
  })
  update!: LinearIssueUpdateWithoutAssigneeInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutAssigneeInput, {
    nullable: false
  })
  create!: LinearIssueCreateWithoutAssigneeInput;
}
