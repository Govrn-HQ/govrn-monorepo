import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentAvgAggregate } from "../outputs/SplitPaymentAvgAggregate";
import { SplitPaymentCountAggregate } from "../outputs/SplitPaymentCountAggregate";
import { SplitPaymentMaxAggregate } from "../outputs/SplitPaymentMaxAggregate";
import { SplitPaymentMinAggregate } from "../outputs/SplitPaymentMinAggregate";
import { SplitPaymentSumAggregate } from "../outputs/SplitPaymentSumAggregate";

@TypeGraphQL.ObjectType("SplitPaymentGroupBy", {
  isAbstract: true
})
export class SplitPaymentGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token_address!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  amount!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tx_hash!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sender_address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  recipient_address!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sender_user_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  split_contract_id!: number;

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
