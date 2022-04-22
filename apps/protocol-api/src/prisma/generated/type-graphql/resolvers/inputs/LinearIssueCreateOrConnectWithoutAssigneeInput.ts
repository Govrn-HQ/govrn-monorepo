import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateWithoutAssigneeInput } from "../inputs/LinearIssueCreateWithoutAssigneeInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueCreateOrConnectWithoutAssigneeInput", {
  isAbstract: true
})
export class LinearIssueCreateOrConnectWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutAssigneeInput, {
    nullable: false
  })
  create!: LinearIssueCreateWithoutAssigneeInput;
}
