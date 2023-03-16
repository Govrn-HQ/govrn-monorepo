import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildContributionListRelationFilter } from "../inputs/GuildContributionListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GuildContributionVerificationStatusWhereInput", {
  isAbstract: true
})
export class GuildContributionVerificationStatusWhereInput {
  @TypeGraphQL.Field(_type => [GuildContributionVerificationStatusWhereInput], {
    nullable: true
  })
  AND?: GuildContributionVerificationStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionVerificationStatusWhereInput], {
    nullable: true
  })
  OR?: GuildContributionVerificationStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionVerificationStatusWhereInput], {
    nullable: true
  })
  NOT?: GuildContributionVerificationStatusWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  verified?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  attestationThreshold?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildContributionListRelationFilter, {
    nullable: true
  })
  guild_contributions?: GuildContributionListRelationFilter | undefined;
}
