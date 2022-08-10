import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearTeamOrderByWithRelationInput } from "../../../inputs/LinearTeamOrderByWithRelationInput";
import { LinearTeamWhereInput } from "../../../inputs/LinearTeamWhereInput";
import { LinearTeamWhereUniqueInput } from "../../../inputs/LinearTeamWhereUniqueInput";
import { LinearTeamScalarFieldEnum } from "../../../../enums/LinearTeamScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLinearTeamArgs {
  @TypeGraphQL.Field(_type => LinearTeamWhereInput, {
    nullable: true
  })
  where?: LinearTeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearTeamOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LinearTeamOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearTeamWhereUniqueInput, {
    nullable: true
  })
  cursor?: LinearTeamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LinearTeamScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "linear_id" | "name" | "key"> | undefined;
}
