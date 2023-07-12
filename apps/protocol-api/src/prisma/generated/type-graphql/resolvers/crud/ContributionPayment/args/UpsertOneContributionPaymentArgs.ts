import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionPaymentCreateInput } from "../../../inputs/ContributionPaymentCreateInput";
import { ContributionPaymentUpdateInput } from "../../../inputs/ContributionPaymentUpdateInput";
import { ContributionPaymentWhereUniqueInput } from "../../../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContributionPaymentArgs {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionPaymentCreateInput, {
    nullable: false
  })
  create!: ContributionPaymentCreateInput;

  @TypeGraphQL.Field(_type => ContributionPaymentUpdateInput, {
    nullable: false
  })
  update!: ContributionPaymentUpdateInput;
}
