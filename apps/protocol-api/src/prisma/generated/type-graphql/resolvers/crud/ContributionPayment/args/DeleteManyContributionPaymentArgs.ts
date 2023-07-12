import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionPaymentWhereInput } from "../../../inputs/ContributionPaymentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyContributionPaymentArgs {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereInput, {
    nullable: true
  })
  where?: ContributionPaymentWhereInput | undefined;
}
