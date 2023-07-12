import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Contribution } from "../models/Contribution";
import { SplitPayment } from "../models/SplitPayment";
import { ContributionPaymentType } from "../enums/ContributionPaymentType";

@TypeGraphQL.ObjectType("ContributionPayment", {
  isAbstract: true
})
export class ContributionPayment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  contribution_id!: number;

  contribution?: Contribution;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  split_payment_id!: number;

  split_payment?: SplitPayment;

  @TypeGraphQL.Field(_type => ContributionPaymentType, {
    nullable: false
  })
  type!: "TIP" | "REPORT";
}
