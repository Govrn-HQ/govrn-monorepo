import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionOrderByRelationAggregateInput } from "../inputs/ContributionOrderByRelationAggregateInput";
import { SplitContractOrderByRelationAggregateInput } from "../inputs/SplitContractOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChainOrderByWithRelationInput", {
  isAbstract: true
})
export class ChainOrderByWithRelationInput {
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
  chain_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContributionOrderByRelationAggregateInput, {
    nullable: true
  })
  contributions?: ContributionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractOrderByRelationAggregateInput, {
    nullable: true
  })
  split_contracts?: SplitContractOrderByRelationAggregateInput | undefined;
}
