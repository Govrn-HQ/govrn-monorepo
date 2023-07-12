import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentAvgOrderByAggregateInput } from "../inputs/ContributionPaymentAvgOrderByAggregateInput";
import { ContributionPaymentCountOrderByAggregateInput } from "../inputs/ContributionPaymentCountOrderByAggregateInput";
import { ContributionPaymentMaxOrderByAggregateInput } from "../inputs/ContributionPaymentMaxOrderByAggregateInput";
import { ContributionPaymentMinOrderByAggregateInput } from "../inputs/ContributionPaymentMinOrderByAggregateInput";
import { ContributionPaymentSumOrderByAggregateInput } from "../inputs/ContributionPaymentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContributionPaymentOrderByWithAggregationInput", {
  isAbstract: true
})
export class ContributionPaymentOrderByWithAggregationInput {
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
  contribution_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  split_payment_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ContributionPaymentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ContributionPaymentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ContributionPaymentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ContributionPaymentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ContributionPaymentSumOrderByAggregateInput | undefined;
}
