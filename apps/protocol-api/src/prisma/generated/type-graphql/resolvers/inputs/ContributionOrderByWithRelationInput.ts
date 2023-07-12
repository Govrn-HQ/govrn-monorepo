import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeOrderByWithRelationInput } from "../inputs/ActivityTypeOrderByWithRelationInput";
import { AttestationOrderByRelationAggregateInput } from "../inputs/AttestationOrderByRelationAggregateInput";
import { ChainOrderByWithRelationInput } from "../inputs/ChainOrderByWithRelationInput";
import { ContributionPaymentOrderByRelationAggregateInput } from "../inputs/ContributionPaymentOrderByRelationAggregateInput";
import { ContributionStatusOrderByWithRelationInput } from "../inputs/ContributionStatusOrderByWithRelationInput";
import { GuildContributionOrderByRelationAggregateInput } from "../inputs/GuildContributionOrderByRelationAggregateInput";
import { LinearIssueOrderByWithRelationInput } from "../inputs/LinearIssueOrderByWithRelationInput";
import { PartnerOrderByRelationAggregateInput } from "../inputs/PartnerOrderByRelationAggregateInput";
import { TwitterTweetContributionOrderByRelationAggregateInput } from "../inputs/TwitterTweetContributionOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContributionOrderByWithRelationInput", {
  isAbstract: true
})
export class ContributionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

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
  status_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusOrderByWithRelationInput, {
    nullable: true
  })
  status?: ContributionStatusOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  activity_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeOrderByWithRelationInput, {
    nullable: true
  })
  activity_type?: ActivityTypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_of_submission?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_of_engagement?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  details?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  proof?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AttestationOrderByRelationAggregateInput, {
    nullable: true
  })
  attestations?: AttestationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnerOrderByRelationAggregateInput, {
    nullable: true
  })
  partners?: PartnerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionOrderByRelationAggregateInput, {
    nullable: true
  })
  guilds?: GuildContributionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueOrderByWithRelationInput, {
    nullable: true
  })
  linear_issue?: LinearIssueOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionOrderByRelationAggregateInput, {
    nullable: true
  })
  twitter_tweet_contributions?: TwitterTweetContributionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  chain_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChainOrderByWithRelationInput, {
    nullable: true
  })
  chain?: ChainOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  on_chain_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tx_hash?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentOrderByRelationAggregateInput, {
    nullable: true
  })
  contribution_tip?: ContributionPaymentOrderByRelationAggregateInput | undefined;
}
