import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentCreateWithoutSplit_paymentInput } from "../inputs/ContributionPaymentCreateWithoutSplit_paymentInput";
import { ContributionPaymentWhereUniqueInput } from "../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.InputType("ContributionPaymentCreateOrConnectWithoutSplit_paymentInput", {
  isAbstract: true
})
export class ContributionPaymentCreateOrConnectWithoutSplit_paymentInput {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionPaymentCreateWithoutSplit_paymentInput, {
    nullable: false
  })
  create!: ContributionPaymentCreateWithoutSplit_paymentInput;
}
