import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearIssueUpdateInput } from "../../../inputs/LinearIssueUpdateInput";
import { LinearIssueWhereUniqueInput } from "../../../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLinearIssueArgs {
  @TypeGraphQL.Field(_type => LinearIssueUpdateInput, {
    nullable: false
  })
  data!: LinearIssueUpdateInput;

  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;
}
