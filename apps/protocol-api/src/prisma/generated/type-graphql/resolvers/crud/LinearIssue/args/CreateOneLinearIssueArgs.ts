import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearIssueCreateInput } from "../../../inputs/LinearIssueCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLinearIssueArgs {
  @TypeGraphQL.Field(_type => LinearIssueCreateInput, {
    nullable: false
  })
  data!: LinearIssueCreateInput;
}
