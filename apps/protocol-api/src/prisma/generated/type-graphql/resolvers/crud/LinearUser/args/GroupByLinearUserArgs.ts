import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearUserOrderByWithAggregationInput } from "../../../inputs/LinearUserOrderByWithAggregationInput";
import { LinearUserScalarWhereWithAggregatesInput } from "../../../inputs/LinearUserScalarWhereWithAggregatesInput";
import { LinearUserWhereInput } from "../../../inputs/LinearUserWhereInput";
import { LinearUserScalarFieldEnum } from "../../../../enums/LinearUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLinearUserArgs {
  @TypeGraphQL.Field(_type => LinearUserWhereInput, {
    nullable: true
  })
  where?: LinearUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LinearUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "active" | "createdAt" | "displayName" | "email" | "linear_id" | "name" | "url" | "user_id" | "access_token" | "active_token">;

  @TypeGraphQL.Field(_type => LinearUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LinearUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
