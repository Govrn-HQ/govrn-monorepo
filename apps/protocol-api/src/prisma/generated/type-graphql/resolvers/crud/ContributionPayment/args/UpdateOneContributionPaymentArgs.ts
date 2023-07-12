import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionPaymentUpdateInput } from "../../../inputs/ContributionPaymentUpdateInput";
import { ContributionPaymentWhereUniqueInput } from "../../../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContributionPaymentArgs {
  @TypeGraphQL.Field(_type => ContributionPaymentUpdateInput, {
    nullable: false
  })
  data!: ContributionPaymentUpdateInput;

  @TypeGraphQL.Field(_type => ContributionPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionPaymentWhereUniqueInput;
}
