import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractAvgAggregate } from "../outputs/SplitContractAvgAggregate";
import { SplitContractCountAggregate } from "../outputs/SplitContractCountAggregate";
import { SplitContractMaxAggregate } from "../outputs/SplitContractMaxAggregate";
import { SplitContractMinAggregate } from "../outputs/SplitContractMinAggregate";
import { SplitContractSumAggregate } from "../outputs/SplitContractSumAggregate";

@TypeGraphQL.ObjectType("AggregateSplitContract", {
  isAbstract: true
})
export class AggregateSplitContract {
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
