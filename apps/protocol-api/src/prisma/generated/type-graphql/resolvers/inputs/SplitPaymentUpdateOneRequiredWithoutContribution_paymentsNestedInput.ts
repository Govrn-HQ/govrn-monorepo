import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateOrConnectWithoutContribution_paymentsInput } from "../inputs/SplitPaymentCreateOrConnectWithoutContribution_paymentsInput";
import { SplitPaymentCreateWithoutContribution_paymentsInput } from "../inputs/SplitPaymentCreateWithoutContribution_paymentsInput";
import { SplitPaymentUpdateWithoutContribution_paymentsInput } from "../inputs/SplitPaymentUpdateWithoutContribution_paymentsInput";
import { SplitPaymentUpsertWithoutContribution_paymentsInput } from "../inputs/SplitPaymentUpsertWithoutContribution_paymentsInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentUpdateOneRequiredWithoutContribution_paymentsNestedInput", {
  isAbstract: true
})
export class SplitPaymentUpdateOneRequiredWithoutContribution_paymentsNestedInput {
  @TypeGraphQL.Field(_type => SplitPaymentCreateWithoutContribution_paymentsInput, {
    nullable: true
  })
  create?: SplitPaymentCreateWithoutContribution_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentCreateOrConnectWithoutContribution_paymentsInput, {
    nullable: true
  })
  connectOrCreate?: SplitPaymentCreateOrConnectWithoutContribution_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentUpsertWithoutContribution_paymentsInput, {
    nullable: true
  })
  upsert?: SplitPaymentUpsertWithoutContribution_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: true
  })
  connect?: SplitPaymentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentUpdateWithoutContribution_paymentsInput, {
    nullable: true
  })
  update?: SplitPaymentUpdateWithoutContribution_paymentsInput | undefined;
}
