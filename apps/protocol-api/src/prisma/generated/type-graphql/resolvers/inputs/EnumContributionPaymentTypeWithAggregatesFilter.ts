import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumContributionPaymentTypeFilter } from "../inputs/NestedEnumContributionPaymentTypeFilter";
import { NestedEnumContributionPaymentTypeWithAggregatesFilter } from "../inputs/NestedEnumContributionPaymentTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ContributionPaymentType } from "../../enums/ContributionPaymentType";

@TypeGraphQL.InputType("EnumContributionPaymentTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumContributionPaymentTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ContributionPaymentType, {
    nullable: true
  })
  equals?: "TIP" | "REPORT" | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentType], {
    nullable: true
  })
  in?: Array<"TIP" | "REPORT"> | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentType], {
    nullable: true
  })
  notIn?: Array<"TIP" | "REPORT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumContributionPaymentTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumContributionPaymentTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumContributionPaymentTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumContributionPaymentTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumContributionPaymentTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumContributionPaymentTypeFilter | undefined;
}
