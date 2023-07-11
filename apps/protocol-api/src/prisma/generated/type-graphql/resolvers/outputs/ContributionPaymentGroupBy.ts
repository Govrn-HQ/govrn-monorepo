import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentAvgAggregate } from "../outputs/ContributionPaymentAvgAggregate";
import { ContributionPaymentCountAggregate } from "../outputs/ContributionPaymentCountAggregate";
import { ContributionPaymentMaxAggregate } from "../outputs/ContributionPaymentMaxAggregate";
import { ContributionPaymentMinAggregate } from "../outputs/ContributionPaymentMinAggregate";
import { ContributionPaymentSumAggregate } from "../outputs/ContributionPaymentSumAggregate";
import { ContributionPaymentType } from "../../enums/ContributionPaymentType";

@TypeGraphQL.ObjectType("ContributionPaymentGroupBy", {
  isAbstract: true
})
export class ContributionPaymentGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  split_payment_id!: number;

  @TypeGraphQL.Field(_type => ContributionPaymentType, {
    nullable: false
  })
  type!: "TIP" | "REPORT";

  @TypeGraphQL.Field(_type => ContributionPaymentCountAggregate, {
    nullable: true
  })
  _count!: ContributionPaymentCountAggregate | null;

  @TypeGraphQL.Field(_type => ContributionPaymentAvgAggregate, {
    nullable: true
  })
  _avg!: ContributionPaymentAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContributionPaymentSumAggregate, {
    nullable: true
  })
  _sum!: ContributionPaymentSumAggregate | null;

  @TypeGraphQL.Field(_type => ContributionPaymentMinAggregate, {
    nullable: true
  })
  _min!: ContributionPaymentMinAggregate | null;

  @TypeGraphQL.Field(_type => ContributionPaymentMaxAggregate, {
    nullable: true
  })
  _max!: ContributionPaymentMaxAggregate | null;
}
