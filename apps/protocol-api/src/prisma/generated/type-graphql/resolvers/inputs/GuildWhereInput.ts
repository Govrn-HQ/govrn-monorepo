import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildContributionListRelationFilter } from "../inputs/GuildContributionListRelationFilter";
import { GuildUserListRelationFilter } from "../inputs/GuildUserListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TwitterAccountRelationFilter } from "../inputs/TwitterAccountRelationFilter";

@TypeGraphQL.InputType("GuildWhereInput", {
  isAbstract: true
})
export class GuildWhereInput {
  @TypeGraphQL.Field(_type => [GuildWhereInput], {
    nullable: true
  })
  AND?: GuildWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereInput], {
    nullable: true
  })
  OR?: GuildWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereInput], {
    nullable: true
  })
  NOT?: GuildWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  discord_id?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  congrats_channel?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  logo?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GuildContributionListRelationFilter, {
    nullable: true
  })
  contributions?: GuildContributionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GuildUserListRelationFilter, {
    nullable: true
  })
  users?: GuildUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountRelationFilter, {
    nullable: true
  })
  twitter_account?: TwitterAccountRelationFilter | undefined;
}
