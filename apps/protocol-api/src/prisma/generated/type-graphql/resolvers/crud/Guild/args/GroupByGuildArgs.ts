import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildOrderByWithAggregationInput } from "../../../inputs/GuildOrderByWithAggregationInput";
import { GuildScalarWhereWithAggregatesInput } from "../../../inputs/GuildScalarWhereWithAggregatesInput";
import { GuildWhereInput } from "../../../inputs/GuildWhereInput";
import { GuildScalarFieldEnum } from "../../../../enums/GuildScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuildArgs {
  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  where?: GuildWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuildOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "discord_id" | "name" | "congrats_channel" | "logo" | "contribution_reporting_channel">;

  @TypeGraphQL.Field(_type => GuildScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuildScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
