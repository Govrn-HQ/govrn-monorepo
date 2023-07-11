import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionPaymentWhereUniqueInput } from "../../../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueContributionPaymentArgs {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionPaymentWhereUniqueInput;
}
