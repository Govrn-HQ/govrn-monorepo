import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeRelationFilter } from "../inputs/ActivityTypeRelationFilter";
import { AttestationListRelationFilter } from "../inputs/AttestationListRelationFilter";
import { ContributionStatusRelationFilter } from "../inputs/ContributionStatusRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildContributionListRelationFilter } from "../inputs/GuildContributionListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LinearIssueRelationFilter } from "../inputs/LinearIssueRelationFilter";
import { PartnerListRelationFilter } from "../inputs/PartnerListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TwitterTweetRelationFilter } from "../inputs/TwitterTweetRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ContributionWhereInput", {
  isAbstract: true
})
export class ContributionWhereInput {
  @TypeGraphQL.Field(_type => [ContributionWhereInput], {
    nullable: true
  })
  AND?: ContributionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereInput], {
    nullable: true
  })
  OR?: ContributionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereInput], {
    nullable: true
  })
  NOT?: ContributionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  status_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusRelationFilter, {
    nullable: true
  })
  status?: ContributionStatusRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  activity_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeRelationFilter, {
    nullable: true
  })
  activity_type?: ActivityTypeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_of_submission?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_of_engagement?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  details?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  proof?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AttestationListRelationFilter, {
    nullable: true
  })
  attestations?: AttestationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PartnerListRelationFilter, {
    nullable: true
  })
  partners?: PartnerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GuildContributionListRelationFilter, {
    nullable: true
  })
  guilds?: GuildContributionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LinearIssueRelationFilter, {
    nullable: true
  })
  linear_issue?: LinearIssueRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetRelationFilter, {
    nullable: true
  })
  tweet?: TwitterTweetRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  on_chain_id?: IntNullableFilter | undefined;
}
