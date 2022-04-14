import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearProjectOrderByWithAggregationInput } from "../../../inputs/LinearProjectOrderByWithAggregationInput";
import { LinearProjectScalarWhereWithAggregatesInput } from "../../../inputs/LinearProjectScalarWhereWithAggregatesInput";
import { LinearProjectWhereInput } from "../../../inputs/LinearProjectWhereInput";
import { LinearProjectScalarFieldEnum } from "../../../../enums/LinearProjectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLinearProjectArgs {
  @TypeGraphQL.Field(_type => LinearProjectWhereInput, {
    nullable: true
  })
  where?: LinearProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearProjectOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LinearProjectOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearProjectScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "linear_id">;

  @TypeGraphQL.Field(_type => LinearProjectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LinearProjectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
