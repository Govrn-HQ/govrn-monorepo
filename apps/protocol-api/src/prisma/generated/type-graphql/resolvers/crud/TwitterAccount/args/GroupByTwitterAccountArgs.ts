import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterAccountOrderByWithAggregationInput } from "../../../inputs/TwitterAccountOrderByWithAggregationInput";
import { TwitterAccountScalarWhereWithAggregatesInput } from "../../../inputs/TwitterAccountScalarWhereWithAggregatesInput";
import { TwitterAccountWhereInput } from "../../../inputs/TwitterAccountWhereInput";
import { TwitterAccountScalarFieldEnum } from "../../../../enums/TwitterAccountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTwitterAccountArgs {
  @TypeGraphQL.Field(_type => TwitterAccountWhereInput, {
    nullable: true
  })
  where?: TwitterAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TwitterAccountOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "account_name" | "guild_id">;

  @TypeGraphQL.Field(_type => TwitterAccountScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TwitterAccountScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
