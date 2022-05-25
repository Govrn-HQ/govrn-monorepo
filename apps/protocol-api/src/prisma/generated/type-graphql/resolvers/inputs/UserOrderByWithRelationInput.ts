import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationOrderByRelationAggregateInput } from "../inputs/AttestationOrderByRelationAggregateInput";
import { ChainTypeOrderByWithRelationInput } from "../inputs/ChainTypeOrderByWithRelationInput";
import { ContributionOrderByRelationAggregateInput } from "../inputs/ContributionOrderByRelationAggregateInput";
import { DiscordUserOrderByRelationAggregateInput } from "../inputs/DiscordUserOrderByRelationAggregateInput";
import { GuildUserOrderByRelationAggregateInput } from "../inputs/GuildUserOrderByRelationAggregateInput";
import { LinearUserOrderByRelationAggregateInput } from "../inputs/LinearUserOrderByRelationAggregateInput";
import { PartnerOrderByRelationAggregateInput } from "../inputs/PartnerOrderByRelationAggregateInput";
import { TwitterUserOrderByWithRelationInput } from "../inputs/TwitterUserOrderByWithRelationInput";
import { UserActivityOrderByRelationAggregateInput } from "../inputs/UserActivityOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  display_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  chain_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChainTypeOrderByWithRelationInput, {
    nullable: true
  })
  chain_type?: ChainTypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  full_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserActivityOrderByRelationAggregateInput, {
    nullable: true
  })
  activities?: UserActivityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationOrderByRelationAggregateInput, {
    nullable: true
  })
  attestations?: AttestationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnerOrderByRelationAggregateInput, {
    nullable: true
  })
  contributionPartners?: PartnerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionOrderByRelationAggregateInput, {
    nullable: true
  })
  contributions?: ContributionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserOrderByRelationAggregateInput, {
    nullable: true
  })
  linear_users?: LinearUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserOrderByRelationAggregateInput, {
    nullable: true
  })
  guild_users?: GuildUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserOrderByWithRelationInput, {
    nullable: true
  })
  twitter_user?: TwitterUserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserOrderByRelationAggregateInput, {
    nullable: true
  })
  discord_users?: DiscordUserOrderByRelationAggregateInput | undefined;
}
