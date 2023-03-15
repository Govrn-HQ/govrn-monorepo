import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("GuildContributionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GuildContributionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GuildContributionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GuildContributionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GuildContributionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GuildContributionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  guild_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  contribution_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  threshold?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  verified?: BoolWithAggregatesFilter | undefined;
}
