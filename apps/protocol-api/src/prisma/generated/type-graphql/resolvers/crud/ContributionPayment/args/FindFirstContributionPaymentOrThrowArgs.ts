import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionPaymentOrderByWithRelationInput } from "../../../inputs/ContributionPaymentOrderByWithRelationInput";
import { ContributionPaymentWhereInput } from "../../../inputs/ContributionPaymentWhereInput";
import { ContributionPaymentWhereUniqueInput } from "../../../inputs/ContributionPaymentWhereUniqueInput";
import { ContributionPaymentScalarFieldEnum } from "../../../../enums/ContributionPaymentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstContributionPaymentOrThrowArgs {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereInput, {
    nullable: true
  })
  where?: ContributionPaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContributionPaymentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContributionPaymentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "contribution_id" | "split_payment_id" | "type"> | undefined;
}
