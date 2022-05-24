import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscordUserOrderByWithAggregationInput } from "../../../inputs/DiscordUserOrderByWithAggregationInput";
import { DiscordUserScalarWhereWithAggregatesInput } from "../../../inputs/DiscordUserScalarWhereWithAggregatesInput";
import { DiscordUserWhereInput } from "../../../inputs/DiscordUserWhereInput";
import { DiscordUserScalarFieldEnum } from "../../../../enums/DiscordUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true
  })
  where?: DiscordUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DiscordUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "display_name" | "discord_id" | "user_id">;

  @TypeGraphQL.Field(_type => DiscordUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DiscordUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
