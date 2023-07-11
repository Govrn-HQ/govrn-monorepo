import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentType } from "../../enums/ContributionPaymentType";

@TypeGraphQL.InputType("EnumContributionPaymentTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumContributionPaymentTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ContributionPaymentType, {
    nullable: true
  })
  set?: "TIP" | "REPORT" | undefined;
}
