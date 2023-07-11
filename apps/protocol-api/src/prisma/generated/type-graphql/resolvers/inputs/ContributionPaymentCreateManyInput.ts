import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentType } from "../../enums/ContributionPaymentType";

@TypeGraphQL.InputType("ContributionPaymentCreateManyInput", {
  isAbstract: true
})
export class ContributionPaymentCreateManyInput {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  split_payment_id!: number;

  @TypeGraphQL.Field(_type => ContributionPaymentType, {
    nullable: false
  })
  type!: "TIP" | "REPORT";
}
