import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateWithoutContribution_paymentsInput } from "../inputs/SplitPaymentCreateWithoutContribution_paymentsInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentCreateOrConnectWithoutContribution_paymentsInput", {
  isAbstract: true
})
export class SplitPaymentCreateOrConnectWithoutContribution_paymentsInput {
  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: SplitPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitPaymentCreateWithoutContribution_paymentsInput, {
    nullable: false
  })
  create!: SplitPaymentCreateWithoutContribution_paymentsInput;
}
