import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentType } from "../../enums/ContributionPaymentType";

@TypeGraphQL.InputType("NestedEnumContributionPaymentTypeFilter", {
  isAbstract: true
})
export class NestedEnumContributionPaymentTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumContributionPaymentTypeFilter, {
    nullable: true
  })
  not?: NestedEnumContributionPaymentTypeFilter | undefined;
}
