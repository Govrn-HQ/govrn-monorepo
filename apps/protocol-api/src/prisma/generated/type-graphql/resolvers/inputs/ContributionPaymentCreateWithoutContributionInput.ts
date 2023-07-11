import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateNestedOneWithoutContribution_paymentsInput } from "../inputs/SplitPaymentCreateNestedOneWithoutContribution_paymentsInput";
import { ContributionPaymentType } from "../../enums/ContributionPaymentType";

@TypeGraphQL.InputType("ContributionPaymentCreateWithoutContributionInput", {
  isAbstract: true
})
export class ContributionPaymentCreateWithoutContributionInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentCreateNestedOneWithoutContribution_paymentsInput, {
    nullable: false
  })
  split_payment!: SplitPaymentCreateNestedOneWithoutContribution_paymentsInput;

  @TypeGraphQL.Field(_type => ContributionPaymentType, {
    nullable: false
  })
  type!: "TIP" | "REPORT";
}
