import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterUserOrderByWithAggregationInput } from "../../../inputs/TwitterUserOrderByWithAggregationInput";
import { TwitterUserScalarWhereWithAggregatesInput } from "../../../inputs/TwitterUserScalarWhereWithAggregatesInput";
import { TwitterUserWhereInput } from "../../../inputs/TwitterUserWhereInput";
import { TwitterUserScalarFieldEnum } from "../../../../enums/TwitterUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  where?: TwitterUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TwitterUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "twitter_user_id" | "name" | "username" | "description" | "user_id">;

  @TypeGraphQL.Field(_type => TwitterUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TwitterUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
