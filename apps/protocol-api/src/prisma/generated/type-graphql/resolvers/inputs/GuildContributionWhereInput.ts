import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionRelationFilter } from "../inputs/ContributionRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildContributionVerificationStatusRelationFilter } from "../inputs/GuildContributionVerificationStatusRelationFilter";
import { GuildRelationFilter } from "../inputs/GuildRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("GuildContributionWhereInput", {
  isAbstract: true
})
export class GuildContributionWhereInput {
  @TypeGraphQL.Field(_type => [GuildContributionWhereInput], {
    nullable: true
  })
  AND?: GuildContributionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereInput], {
    nullable: true
  })
  OR?: GuildContributionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereInput], {
    nullable: true
  })
  NOT?: GuildContributionWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildRelationFilter, {
    nullable: true
  })
  guild?: GuildRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  contribution_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionRelationFilter, {
    nullable: true
  })
  contribution?: ContributionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  verification_status_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  attestation_threshold?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusRelationFilter, {
    nullable: true
  })
  verificationStatus?: GuildContributionVerificationStatusRelationFilter | undefined;
}
