import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionPaymentCreateInput } from "../../../inputs/ContributionPaymentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContributionPaymentArgs {
  @TypeGraphQL.Field(_type => ContributionPaymentCreateInput, {
    nullable: false
  })
  data!: ContributionPaymentCreateInput;
}
