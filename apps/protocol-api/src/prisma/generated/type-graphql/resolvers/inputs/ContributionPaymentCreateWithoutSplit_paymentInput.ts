import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateNestedOneWithoutContribution_tipInput } from "../inputs/ContributionCreateNestedOneWithoutContribution_tipInput";
import { ContributionPaymentType } from "../../enums/ContributionPaymentType";

@TypeGraphQL.InputType("ContributionPaymentCreateWithoutSplit_paymentInput", {
  isAbstract: true
})
export class ContributionPaymentCreateWithoutSplit_paymentInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutContribution_tipInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutContribution_tipInput;

  @TypeGraphQL.Field(_type => ContributionPaymentType, {
    nullable: false
  })
  type!: "TIP" | "REPORT";
}
