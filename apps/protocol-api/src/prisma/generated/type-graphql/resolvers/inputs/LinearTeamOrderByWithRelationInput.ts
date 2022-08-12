import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueOrderByRelationAggregateInput } from "../inputs/LinearIssueOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LinearTeamOrderByWithRelationInput", {
  isAbstract: true
})
export class LinearTeamOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  linear_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LinearIssueOrderByRelationAggregateInput, {
    nullable: true
  })
  issues?: LinearIssueOrderByRelationAggregateInput | undefined;
}
