import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearTeamCreateManyInput } from "../../../inputs/LinearTeamCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLinearTeamArgs {
  @TypeGraphQL.Field(_type => [LinearTeamCreateManyInput], {
    nullable: false
  })
  data!: LinearTeamCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
