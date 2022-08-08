import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateWithoutTeamInput } from "../inputs/LinearIssueCreateWithoutTeamInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueCreateOrConnectWithoutTeamInput", {
  isAbstract: true
})
export class LinearIssueCreateOrConnectWithoutTeamInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutTeamInput, {
    nullable: false
  })
  create!: LinearIssueCreateWithoutTeamInput;
}
