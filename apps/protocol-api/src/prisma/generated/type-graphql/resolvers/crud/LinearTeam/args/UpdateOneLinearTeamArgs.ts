import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearTeamUpdateInput } from "../../../inputs/LinearTeamUpdateInput";
import { LinearTeamWhereUniqueInput } from "../../../inputs/LinearTeamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLinearTeamArgs {
  @TypeGraphQL.Field(_type => LinearTeamUpdateInput, {
    nullable: false
  })
  data!: LinearTeamUpdateInput;

  @TypeGraphQL.Field(_type => LinearTeamWhereUniqueInput, {
    nullable: false
  })
  where!: LinearTeamWhereUniqueInput;
}
