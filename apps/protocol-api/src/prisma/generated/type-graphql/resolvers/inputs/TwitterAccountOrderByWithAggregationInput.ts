import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountAvgOrderByAggregateInput } from "../inputs/TwitterAccountAvgOrderByAggregateInput";
import { TwitterAccountCountOrderByAggregateInput } from "../inputs/TwitterAccountCountOrderByAggregateInput";
import { TwitterAccountMaxOrderByAggregateInput } from "../inputs/TwitterAccountMaxOrderByAggregateInput";
import { TwitterAccountMinOrderByAggregateInput } from "../inputs/TwitterAccountMinOrderByAggregateInput";
import { TwitterAccountSumOrderByAggregateInput } from "../inputs/TwitterAccountSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TwitterAccountOrderByWithAggregationInput", {
  isAbstract: true
})
export class TwitterAccountOrderByWithAggregationInput {
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
  account_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guild_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TwitterAccountCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TwitterAccountAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TwitterAccountMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TwitterAccountMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TwitterAccountSumOrderByAggregateInput | undefined;
}
