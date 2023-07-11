import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionOrderByWithRelationInput } from "../inputs/ContributionOrderByWithRelationInput";
import { SplitPaymentOrderByWithRelationInput } from "../inputs/SplitPaymentOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContributionPaymentOrderByWithRelationInput", {
  isAbstract: true
})
export class ContributionPaymentOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ContributionOrderByWithRelationInput, {
    nullable: true
  })
  contribution?: ContributionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  split_payment_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentOrderByWithRelationInput, {
    nullable: true
  })
  split_payment?: SplitPaymentOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;
}
