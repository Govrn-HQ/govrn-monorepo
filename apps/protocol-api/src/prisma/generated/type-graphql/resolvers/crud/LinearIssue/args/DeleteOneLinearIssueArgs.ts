import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearIssueWhereUniqueInput } from "../../../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLinearIssueArgs {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;
}
