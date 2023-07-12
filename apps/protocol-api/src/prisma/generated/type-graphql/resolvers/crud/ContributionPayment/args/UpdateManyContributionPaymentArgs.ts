import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionPaymentUpdateManyMutationInput } from "../../../inputs/ContributionPaymentUpdateManyMutationInput";
import { ContributionPaymentWhereInput } from "../../../inputs/ContributionPaymentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContributionPaymentArgs {
  @TypeGraphQL.Field(_type => ContributionPaymentUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContributionPaymentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContributionPaymentWhereInput, {
    nullable: true
  })
  where?: ContributionPaymentWhereInput | undefined;
}
