import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionVerificationStatusOrderByWithAggregationInput } from "../../../inputs/GuildContributionVerificationStatusOrderByWithAggregationInput";
import { GuildContributionVerificationStatusScalarWhereWithAggregatesInput } from "../../../inputs/GuildContributionVerificationStatusScalarWhereWithAggregatesInput";
import { GuildContributionVerificationStatusWhereInput } from "../../../inputs/GuildContributionVerificationStatusWhereInput";
import { GuildContributionVerificationStatusScalarFieldEnum } from "../../../../enums/GuildContributionVerificationStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuildContributionVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereInput, {
    nullable: true
  })
  where?: GuildContributionVerificationStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionVerificationStatusOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuildContributionVerificationStatusOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionVerificationStatusScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name" | "verified" | "attestationThreshold">;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuildContributionVerificationStatusScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
