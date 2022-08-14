import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearTeamCreateInput } from "../../../inputs/LinearTeamCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLinearTeamArgs {
  @TypeGraphQL.Field(_type => LinearTeamCreateInput, {
    nullable: false
  })
  data!: LinearTeamCreateInput;
}
