import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildMembershipStatusAvgOrderByAggregateInput } from "../inputs/GuildMembershipStatusAvgOrderByAggregateInput";
import { GuildMembershipStatusCountOrderByAggregateInput } from "../inputs/GuildMembershipStatusCountOrderByAggregateInput";
import { GuildMembershipStatusMaxOrderByAggregateInput } from "../inputs/GuildMembershipStatusMaxOrderByAggregateInput";
import { GuildMembershipStatusMinOrderByAggregateInput } from "../inputs/GuildMembershipStatusMinOrderByAggregateInput";
import { GuildMembershipStatusSumOrderByAggregateInput } from "../inputs/GuildMembershipStatusSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildMembershipStatusOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuildMembershipStatusOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => GuildMembershipStatusCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuildMembershipStatusCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuildMembershipStatusAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuildMembershipStatusMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuildMembershipStatusMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuildMembershipStatusSumOrderByAggregateInput | undefined;
}
