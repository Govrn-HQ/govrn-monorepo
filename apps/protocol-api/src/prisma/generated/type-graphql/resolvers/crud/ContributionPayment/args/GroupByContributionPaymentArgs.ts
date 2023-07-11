import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionPaymentOrderByWithAggregationInput } from "../../../inputs/ContributionPaymentOrderByWithAggregationInput";
import { ContributionPaymentScalarWhereWithAggregatesInput } from "../../../inputs/ContributionPaymentScalarWhereWithAggregatesInput";
import { ContributionPaymentWhereInput } from "../../../inputs/ContributionPaymentWhereInput";
import { ContributionPaymentScalarFieldEnum } from "../../../../enums/ContributionPaymentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContributionPaymentArgs {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereInput, {
    nullable: true
  })
  where?: ContributionPaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ContributionPaymentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "contribution_id" | "split_payment_id" | "type">;

  @TypeGraphQL.Field(_type => ContributionPaymentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ContributionPaymentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
