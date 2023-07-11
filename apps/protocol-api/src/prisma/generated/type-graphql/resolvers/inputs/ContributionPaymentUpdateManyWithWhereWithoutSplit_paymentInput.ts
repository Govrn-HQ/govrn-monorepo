import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentScalarWhereInput } from "../inputs/ContributionPaymentScalarWhereInput";
import { ContributionPaymentUpdateManyMutationInput } from "../inputs/ContributionPaymentUpdateManyMutationInput";

@TypeGraphQL.InputType("ContributionPaymentUpdateManyWithWhereWithoutSplit_paymentInput", {
  isAbstract: true
})
export class ContributionPaymentUpdateManyWithWhereWithoutSplit_paymentInput {
  @TypeGraphQL.Field(_type => ContributionPaymentScalarWhereInput, {
    nullable: false
  })
  where!: ContributionPaymentScalarWhereInput;

  @TypeGraphQL.Field(_type => ContributionPaymentUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContributionPaymentUpdateManyMutationInput;
}
