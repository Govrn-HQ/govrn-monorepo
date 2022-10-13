import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionOrderByWithAggregationInput } from "../../../inputs/ContributionOrderByWithAggregationInput";
import { ContributionScalarWhereWithAggregatesInput } from "../../../inputs/ContributionScalarWhereWithAggregatesInput";
import { ContributionWhereInput } from "../../../inputs/ContributionWhereInput";
import { ContributionScalarFieldEnum } from "../../../../enums/ContributionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContributionArgs {
  @TypeGraphQL.Field(_type => ContributionWhereInput, {
    nullable: true
  })
  where?: ContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContributionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ContributionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "updatedAt" | "name" | "status_id" | "activity_type_id" | "user_id" | "date_of_submission" | "date_of_engagement" | "details" | "proof" | "chain_id" | "on_chain_id" | "tx_hash">;

  @TypeGraphQL.Field(_type => ContributionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ContributionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
