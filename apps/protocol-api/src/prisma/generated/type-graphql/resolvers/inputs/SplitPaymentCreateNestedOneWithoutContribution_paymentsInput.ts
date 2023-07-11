import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateOrConnectWithoutContribution_paymentsInput } from "../inputs/SplitPaymentCreateOrConnectWithoutContribution_paymentsInput";
import { SplitPaymentCreateWithoutContribution_paymentsInput } from "../inputs/SplitPaymentCreateWithoutContribution_paymentsInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentCreateNestedOneWithoutContribution_paymentsInput", {
  isAbstract: true
})
export class SplitPaymentCreateNestedOneWithoutContribution_paymentsInput {
  @TypeGraphQL.Field(_type => SplitPaymentCreateWithoutContribution_paymentsInput, {
    nullable: true
  })
  create?: SplitPaymentCreateWithoutContribution_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentCreateOrConnectWithoutContribution_paymentsInput, {
    nullable: true
  })
  connectOrCreate?: SplitPaymentCreateOrConnectWithoutContribution_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: true
  })
  connect?: SplitPaymentWhereUniqueInput | undefined;
}
