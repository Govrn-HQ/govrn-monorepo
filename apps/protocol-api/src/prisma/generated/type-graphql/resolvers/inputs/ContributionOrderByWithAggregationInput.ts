import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionAvgOrderByAggregateInput } from "../inputs/ContributionAvgOrderByAggregateInput";
import { ContributionCountOrderByAggregateInput } from "../inputs/ContributionCountOrderByAggregateInput";
import { ContributionMaxOrderByAggregateInput } from "../inputs/ContributionMaxOrderByAggregateInput";
import { ContributionMinOrderByAggregateInput } from "../inputs/ContributionMinOrderByAggregateInput";
import { ContributionSumOrderByAggregateInput } from "../inputs/ContributionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContributionOrderByWithAggregationInput", {
  isAbstract: true
})
export class ContributionOrderByWithAggregationInput {
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
  status_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  activity_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => ContributionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ContributionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ContributionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ContributionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ContributionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ContributionSumOrderByAggregateInput | undefined;
}
