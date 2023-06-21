import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentAvgAggregate } from "../outputs/SplitPaymentAvgAggregate";
import { SplitPaymentCountAggregate } from "../outputs/SplitPaymentCountAggregate";
import { SplitPaymentMaxAggregate } from "../outputs/SplitPaymentMaxAggregate";
import { SplitPaymentMinAggregate } from "../outputs/SplitPaymentMinAggregate";
import { SplitPaymentSumAggregate } from "../outputs/SplitPaymentSumAggregate";

@TypeGraphQL.ObjectType("AggregateSplitPayment", {
  isAbstract: true
})
export class AggregateSplitPayment {
  @TypeGraphQL.Field(_type => SplitPaymentCountAggregate, {
    nullable: true
  })
  _count!: SplitPaymentCountAggregate | null;

  @TypeGraphQL.Field(_type => SplitPaymentAvgAggregate, {
    nullable: true
  })
  _avg!: SplitPaymentAvgAggregate | null;

  @TypeGraphQL.Field(_type => SplitPaymentSumAggregate, {
    nullable: true
  })
  _sum!: SplitPaymentSumAggregate | null;

  @TypeGraphQL.Field(_type => SplitPaymentMinAggregate, {
    nullable: true
  })
  _min!: SplitPaymentMinAggregate | null;

  @TypeGraphQL.Field(_type => SplitPaymentMaxAggregate, {
    nullable: true
  })
  _max!: SplitPaymentMaxAggregate | null;
}
