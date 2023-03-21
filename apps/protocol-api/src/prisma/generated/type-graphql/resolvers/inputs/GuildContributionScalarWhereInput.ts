import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("GuildContributionScalarWhereInput", {
  isAbstract: true
})
export class GuildContributionScalarWhereInput {
  @TypeGraphQL.Field(_type => [GuildContributionScalarWhereInput], {
    nullable: true
  })
  AND?: GuildContributionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionScalarWhereInput], {
    nullable: true
  })
  OR?: GuildContributionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionScalarWhereInput], {
    nullable: true
  })
  NOT?: GuildContributionScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  contribution_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  verification_status_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  verified?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  attestation_threshold?: IntNullableFilter | undefined;
}
