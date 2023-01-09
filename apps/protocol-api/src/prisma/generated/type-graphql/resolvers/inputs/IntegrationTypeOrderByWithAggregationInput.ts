import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationTypeAvgOrderByAggregateInput } from "../inputs/IntegrationTypeAvgOrderByAggregateInput";
import { IntegrationTypeCountOrderByAggregateInput } from "../inputs/IntegrationTypeCountOrderByAggregateInput";
import { IntegrationTypeMaxOrderByAggregateInput } from "../inputs/IntegrationTypeMaxOrderByAggregateInput";
import { IntegrationTypeMinOrderByAggregateInput } from "../inputs/IntegrationTypeMinOrderByAggregateInput";
import { IntegrationTypeSumOrderByAggregateInput } from "../inputs/IntegrationTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IntegrationTypeOrderByWithAggregationInput", {
  isAbstract: true
})
export class IntegrationTypeOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => IntegrationTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IntegrationTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: IntegrationTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IntegrationTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IntegrationTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: IntegrationTypeSumOrderByAggregateInput | undefined;
}
