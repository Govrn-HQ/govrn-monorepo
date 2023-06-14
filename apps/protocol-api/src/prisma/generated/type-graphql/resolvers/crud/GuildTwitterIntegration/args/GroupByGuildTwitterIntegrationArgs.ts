import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildTwitterIntegrationOrderByWithAggregationInput } from "../../../inputs/GuildTwitterIntegrationOrderByWithAggregationInput";
import { GuildTwitterIntegrationScalarWhereWithAggregatesInput } from "../../../inputs/GuildTwitterIntegrationScalarWhereWithAggregatesInput";
import { GuildTwitterIntegrationWhereInput } from "../../../inputs/GuildTwitterIntegrationWhereInput";
import { GuildTwitterIntegrationScalarFieldEnum } from "../../../../enums/GuildTwitterIntegrationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuildTwitterIntegrationArgs {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereInput, {
    nullable: true
  })
  where?: GuildTwitterIntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuildTwitterIntegrationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "guild_id" | "hashtag">;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuildTwitterIntegrationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
