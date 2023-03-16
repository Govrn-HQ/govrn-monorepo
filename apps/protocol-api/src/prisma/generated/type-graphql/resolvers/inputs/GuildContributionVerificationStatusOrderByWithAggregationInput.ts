import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionVerificationStatusAvgOrderByAggregateInput } from "../inputs/GuildContributionVerificationStatusAvgOrderByAggregateInput";
import { GuildContributionVerificationStatusCountOrderByAggregateInput } from "../inputs/GuildContributionVerificationStatusCountOrderByAggregateInput";
import { GuildContributionVerificationStatusMaxOrderByAggregateInput } from "../inputs/GuildContributionVerificationStatusMaxOrderByAggregateInput";
import { GuildContributionVerificationStatusMinOrderByAggregateInput } from "../inputs/GuildContributionVerificationStatusMinOrderByAggregateInput";
import { GuildContributionVerificationStatusSumOrderByAggregateInput } from "../inputs/GuildContributionVerificationStatusSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildContributionVerificationStatusOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuildContributionVerificationStatusOrderByWithAggregationInput {
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
  verified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  attestationThreshold?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuildContributionVerificationStatusCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuildContributionVerificationStatusAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuildContributionVerificationStatusMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuildContributionVerificationStatusMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuildContributionVerificationStatusSumOrderByAggregateInput | undefined;
}
