import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateWithoutContribution_paymentsInput } from "../inputs/SplitPaymentCreateWithoutContribution_paymentsInput";
import { SplitPaymentUpdateWithoutContribution_paymentsInput } from "../inputs/SplitPaymentUpdateWithoutContribution_paymentsInput";

@TypeGraphQL.InputType("SplitPaymentUpsertWithoutContribution_paymentsInput", {
  isAbstract: true
})
export class SplitPaymentUpsertWithoutContribution_paymentsInput {
  @TypeGraphQL.Field(_type => SplitPaymentUpdateWithoutContribution_paymentsInput, {
    nullable: false
  })
  update!: SplitPaymentUpdateWithoutContribution_paymentsInput;

  @TypeGraphQL.Field(_type => SplitPaymentCreateWithoutContribution_paymentsInput, {
    nullable: false
  })
  create!: SplitPaymentCreateWithoutContribution_paymentsInput;
}
