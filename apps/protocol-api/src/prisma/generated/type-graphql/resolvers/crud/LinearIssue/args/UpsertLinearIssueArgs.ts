import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearIssueCreateInput } from "../../../inputs/LinearIssueCreateInput";
import { LinearIssueUpdateInput } from "../../../inputs/LinearIssueUpdateInput";
import { LinearIssueWhereUniqueInput } from "../../../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLinearIssueArgs {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateInput, {
    nullable: false
  })
  create!: LinearIssueCreateInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateInput, {
    nullable: false
  })
  update!: LinearIssueUpdateInput;
}
