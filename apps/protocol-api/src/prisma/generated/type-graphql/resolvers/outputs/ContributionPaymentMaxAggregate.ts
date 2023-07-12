import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentType } from "../../enums/ContributionPaymentType";

@TypeGraphQL.ObjectType("ContributionPaymentMaxAggregate", {
  isAbstract: true
})
export class ContributionPaymentMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  contribution_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  split_payment_id!: number | null;

  @TypeGraphQL.Field(_type => ContributionPaymentType, {
    nullable: true
  })
  type!: "TIP" | "REPORT" | null;
}
