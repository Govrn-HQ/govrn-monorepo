import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentType } from "../../enums/ContributionPaymentType";

@TypeGraphQL.InputType("ContributionPaymentCreateManySplit_paymentInput", {
  isAbstract: true
})
export class ContributionPaymentCreateManySplit_paymentInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  contribution_id!: number;

  @TypeGraphQL.Field(_type => ContributionPaymentType, {
    nullable: false
  })
  type!: "TIP" | "REPORT";
}
