import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumContributionPaymentTypeWithAggregatesFilter } from "../inputs/EnumContributionPaymentTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ContributionPaymentScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ContributionPaymentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ContributionPaymentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ContributionPaymentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ContributionPaymentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ContributionPaymentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  contribution_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  split_payment_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumContributionPaymentTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumContributionPaymentTypeWithAggregatesFilter | undefined;
}
