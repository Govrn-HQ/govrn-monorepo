import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityTypeOrderByRelationAggregateInput } from "../inputs/CategoryActivityTypeOrderByRelationAggregateInput";
import { ContributionOrderByRelationAggregateInput } from "../inputs/ContributionOrderByRelationAggregateInput";
import { UserActivityOrderByRelationAggregateInput } from "../inputs/UserActivityOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActivityTypeOrderByWithRelationInput", {
  isAbstract: true
})
export class ActivityTypeOrderByWithRelationInput {
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
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserActivityOrderByRelationAggregateInput, {
    nullable: true
  })
  users?: UserActivityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionOrderByRelationAggregateInput, {
    nullable: true
  })
  contributions?: ContributionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeOrderByRelationAggregateInput, {
    nullable: true
  })
  categoryActivity?: CategoryActivityTypeOrderByRelationAggregateInput | undefined;
}
