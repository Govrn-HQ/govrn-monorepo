import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearCycleAvgAggregate } from "../outputs/LinearCycleAvgAggregate";
import { LinearCycleCountAggregate } from "../outputs/LinearCycleCountAggregate";
import { LinearCycleMaxAggregate } from "../outputs/LinearCycleMaxAggregate";
import { LinearCycleMinAggregate } from "../outputs/LinearCycleMinAggregate";
import { LinearCycleSumAggregate } from "../outputs/LinearCycleSumAggregate";

@TypeGraphQL.ObjectType("AggregateLinearCycle", {
  isAbstract: true
})
export class AggregateLinearCycle {
  @TypeGraphQL.Field(_type => LinearCycleCountAggregate, {
    nullable: true
  })
  _count!: LinearCycleCountAggregate | null;

  @TypeGraphQL.Field(_type => LinearCycleAvgAggregate, {
    nullable: true
  })
  _avg!: LinearCycleAvgAggregate | null;

  @TypeGraphQL.Field(_type => LinearCycleSumAggregate, {
    nullable: true
  })
  _sum!: LinearCycleSumAggregate | null;

  @TypeGraphQL.Field(_type => LinearCycleMinAggregate, {
    nullable: true
  })
  _min!: LinearCycleMinAggregate | null;

  @TypeGraphQL.Field(_type => LinearCycleMaxAggregate, {
    nullable: true
  })
  _max!: LinearCycleMaxAggregate | null;
}
