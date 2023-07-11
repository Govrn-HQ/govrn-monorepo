import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentUpdateWithoutSplit_paymentInput } from "../inputs/ContributionPaymentUpdateWithoutSplit_paymentInput";
import { ContributionPaymentWhereUniqueInput } from "../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.InputType("ContributionPaymentUpdateWithWhereUniqueWithoutSplit_paymentInput", {
  isAbstract: true
})
export class ContributionPaymentUpdateWithWhereUniqueWithoutSplit_paymentInput {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionPaymentUpdateWithoutSplit_paymentInput, {
    nullable: false
  })
  data!: ContributionPaymentUpdateWithoutSplit_paymentInput;
}
