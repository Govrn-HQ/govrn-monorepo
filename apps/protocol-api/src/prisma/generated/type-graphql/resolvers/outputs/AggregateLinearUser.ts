import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserAvgAggregate } from "../outputs/LinearUserAvgAggregate";
import { LinearUserCountAggregate } from "../outputs/LinearUserCountAggregate";
import { LinearUserMaxAggregate } from "../outputs/LinearUserMaxAggregate";
import { LinearUserMinAggregate } from "../outputs/LinearUserMinAggregate";
import { LinearUserSumAggregate } from "../outputs/LinearUserSumAggregate";

@TypeGraphQL.ObjectType("AggregateLinearUser", {
  isAbstract: true
})
export class AggregateLinearUser {
  @TypeGraphQL.Field(_type => LinearUserCountAggregate, {
    nullable: true
  })
  _count!: LinearUserCountAggregate | null;

  @TypeGraphQL.Field(_type => LinearUserAvgAggregate, {
    nullable: true
  })
  _avg!: LinearUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => LinearUserSumAggregate, {
    nullable: true
  })
  _sum!: LinearUserSumAggregate | null;

  @TypeGraphQL.Field(_type => LinearUserMinAggregate, {
    nullable: true
  })
  _min!: LinearUserMinAggregate | null;

  @TypeGraphQL.Field(_type => LinearUserMaxAggregate, {
    nullable: true
  })
  _max!: LinearUserMaxAggregate | null;
}
