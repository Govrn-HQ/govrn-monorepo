import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionOrderByWithAggregationInput } from "../../../inputs/GuildContributionOrderByWithAggregationInput";
import { GuildContributionScalarWhereWithAggregatesInput } from "../../../inputs/GuildContributionScalarWhereWithAggregatesInput";
import { GuildContributionWhereInput } from "../../../inputs/GuildContributionWhereInput";
import { GuildContributionScalarFieldEnum } from "../../../../enums/GuildContributionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuildContributionArgs {
  @TypeGraphQL.Field(_type => GuildContributionWhereInput, {
    nullable: true
  })
  where?: GuildContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuildContributionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "guild_id" | "contribution_id" | "verification_status_id" | "attestation_threshold">;

  @TypeGraphQL.Field(_type => GuildContributionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuildContributionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
