import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildVerificationStatusAvgOrderByAggregateInput } from "../inputs/GuildVerificationStatusAvgOrderByAggregateInput";
import { GuildVerificationStatusCountOrderByAggregateInput } from "../inputs/GuildVerificationStatusCountOrderByAggregateInput";
import { GuildVerificationStatusMaxOrderByAggregateInput } from "../inputs/GuildVerificationStatusMaxOrderByAggregateInput";
import { GuildVerificationStatusMinOrderByAggregateInput } from "../inputs/GuildVerificationStatusMinOrderByAggregateInput";
import { GuildVerificationStatusSumOrderByAggregateInput } from "../inputs/GuildVerificationStatusSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildVerificationStatusOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuildVerificationStatusOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => GuildVerificationStatusCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuildVerificationStatusCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuildVerificationStatusAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuildVerificationStatusMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuildVerificationStatusMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuildVerificationStatusSumOrderByAggregateInput | undefined;
}
