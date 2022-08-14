import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerAvgOrderByAggregateInput } from "../inputs/PartnerAvgOrderByAggregateInput";
import { PartnerCountOrderByAggregateInput } from "../inputs/PartnerCountOrderByAggregateInput";
import { PartnerMaxOrderByAggregateInput } from "../inputs/PartnerMaxOrderByAggregateInput";
import { PartnerMinOrderByAggregateInput } from "../inputs/PartnerMinOrderByAggregateInput";
import { PartnerSumOrderByAggregateInput } from "../inputs/PartnerSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PartnerOrderByWithAggregationInput", {
  isAbstract: true
})
export class PartnerOrderByWithAggregationInput {
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
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contribution_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PartnerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PartnerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PartnerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PartnerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PartnerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PartnerSumOrderByAggregateInput | undefined;
}
