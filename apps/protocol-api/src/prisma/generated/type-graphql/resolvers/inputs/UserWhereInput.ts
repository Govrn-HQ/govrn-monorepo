import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationListRelationFilter } from "../inputs/AttestationListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { ChainTypeRelationFilter } from "../inputs/ChainTypeRelationFilter";
import { ContributionListRelationFilter } from "../inputs/ContributionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DiscordUserListRelationFilter } from "../inputs/DiscordUserListRelationFilter";
import { GuildUserListRelationFilter } from "../inputs/GuildUserListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LinearUserListRelationFilter } from "../inputs/LinearUserListRelationFilter";
import { PartnerListRelationFilter } from "../inputs/PartnerListRelationFilter";
import { SplitPaymentListRelationFilter } from "../inputs/SplitPaymentListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TwitterUserRelationFilter } from "../inputs/TwitterUserRelationFilter";
import { UserActivityListRelationFilter } from "../inputs/UserActivityListRelationFilter";
import { UserSplitContractListRelationFilter } from "../inputs/UserSplitContractListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  display_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  chain_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ChainTypeRelationFilter, {
    nullable: true
  })
  chain_type?: ChainTypeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  full_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserActivityListRelationFilter, {
    nullable: true
  })
  activities?: UserActivityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AttestationListRelationFilter, {
    nullable: true
  })
  attestations?: AttestationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PartnerListRelationFilter, {
    nullable: true
  })
  contributionPartners?: PartnerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionListRelationFilter, {
    nullable: true
  })
  contributions?: ContributionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LinearUserListRelationFilter, {
    nullable: true
  })
  linear_users?: LinearUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GuildUserListRelationFilter, {
    nullable: true
  })
  guild_users?: GuildUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TwitterUserRelationFilter, {
    nullable: true
  })
  twitter_user?: TwitterUserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DiscordUserListRelationFilter, {
    nullable: true
  })
  discord_users?: DiscordUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractListRelationFilter, {
    nullable: true
  })
  split_contracts?: UserSplitContractListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentListRelationFilter, {
    nullable: true
  })
  sent_split_payments?: SplitPaymentListRelationFilter | undefined;
}
