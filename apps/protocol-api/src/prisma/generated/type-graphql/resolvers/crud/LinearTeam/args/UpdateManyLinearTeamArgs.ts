import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearTeamUpdateManyMutationInput } from "../../../inputs/LinearTeamUpdateManyMutationInput";
import { LinearTeamWhereInput } from "../../../inputs/LinearTeamWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLinearTeamArgs {
  @TypeGraphQL.Field(_type => LinearTeamUpdateManyMutationInput, {
    nullable: false
  })
  data!: LinearTeamUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LinearTeamWhereInput, {
    nullable: true
  })
  where?: LinearTeamWhereInput | undefined;
}
