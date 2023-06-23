import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractAvgAggregate } from "../outputs/SplitContractAvgAggregate";
import { SplitContractCountAggregate } from "../outputs/SplitContractCountAggregate";
import { SplitContractMaxAggregate } from "../outputs/SplitContractMaxAggregate";
import { SplitContractMinAggregate } from "../outputs/SplitContractMinAggregate";
import { SplitContractSumAggregate } from "../outputs/SplitContractSumAggregate";

@TypeGraphQL.ObjectType("SplitContractGroupBy", {
  isAbstract: true
})
export class SplitContractGroupBy {
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
  chain_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tx_hash!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enabled!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  user_split_contract_id!: number | null;

  @TypeGraphQL.Field(_type => SplitContractCountAggregate, {
    nullable: true
  })
  _count!: SplitContractCountAggregate | null;

  @TypeGraphQL.Field(_type => SplitContractAvgAggregate, {
    nullable: true
  })
  _avg!: SplitContractAvgAggregate | null;

  @TypeGraphQL.Field(_type => SplitContractSumAggregate, {
    nullable: true
  })
  _sum!: SplitContractSumAggregate | null;

  @TypeGraphQL.Field(_type => SplitContractMinAggregate, {
    nullable: true
  })
  _min!: SplitContractMinAggregate | null;

  @TypeGraphQL.Field(_type => SplitContractMaxAggregate, {
    nullable: true
  })
  _max!: SplitContractMaxAggregate | null;
}
