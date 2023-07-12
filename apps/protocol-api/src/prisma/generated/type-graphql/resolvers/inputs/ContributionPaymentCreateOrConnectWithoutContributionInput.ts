import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentCreateWithoutContributionInput } from "../inputs/ContributionPaymentCreateWithoutContributionInput";
import { ContributionPaymentWhereUniqueInput } from "../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.InputType("ContributionPaymentCreateOrConnectWithoutContributionInput", {
  isAbstract: true
})
export class ContributionPaymentCreateOrConnectWithoutContributionInput {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionPaymentCreateWithoutContributionInput, {
    nullable: false
  })
  create!: ContributionPaymentCreateWithoutContributionInput;
}
