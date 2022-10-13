import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionOrderByWithRelationInput } from "../../../inputs/ContributionOrderByWithRelationInput";
import { ContributionWhereInput } from "../../../inputs/ContributionWhereInput";
import { ContributionWhereUniqueInput } from "../../../inputs/ContributionWhereUniqueInput";
import { ContributionScalarFieldEnum } from "../../../../enums/ContributionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserContributionsArgs {
  @TypeGraphQL.Field(_type => ContributionWhereInput, {
    nullable: true
  })
  where?: ContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContributionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContributionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContributionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "updatedAt" | "name" | "status_id" | "activity_type_id" | "user_id" | "date_of_submission" | "date_of_engagement" | "details" | "proof" | "chain_id" | "on_chain_id" | "tx_hash"> | undefined;
}
