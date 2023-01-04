import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearTeamCreateInput } from "../../../inputs/LinearTeamCreateInput";
import { LinearTeamUpdateInput } from "../../../inputs/LinearTeamUpdateInput";
import { LinearTeamWhereUniqueInput } from "../../../inputs/LinearTeamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLinearTeamArgs {
  @TypeGraphQL.Field(_type => LinearTeamWhereUniqueInput, {
    nullable: false
  })
  where!: LinearTeamWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearTeamCreateInput, {
    nullable: false
  })
  create!: LinearTeamCreateInput;

  @TypeGraphQL.Field(_type => LinearTeamUpdateInput, {
    nullable: false
  })
  update!: LinearTeamUpdateInput;
}
