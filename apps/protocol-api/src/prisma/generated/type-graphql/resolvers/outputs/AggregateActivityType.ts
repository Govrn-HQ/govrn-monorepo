import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeAvgAggregate } from "../outputs/ActivityTypeAvgAggregate";
import { ActivityTypeCountAggregate } from "../outputs/ActivityTypeCountAggregate";
import { ActivityTypeMaxAggregate } from "../outputs/ActivityTypeMaxAggregate";
import { ActivityTypeMinAggregate } from "../outputs/ActivityTypeMinAggregate";
import { ActivityTypeSumAggregate } from "../outputs/ActivityTypeSumAggregate";

@TypeGraphQL.ObjectType("AggregateActivityType", {
  isAbstract: true
})
export class AggregateActivityType {
  @TypeGraphQL.Field(_type => ActivityTypeCountAggregate, {
    nullable: true
  })
  _count!: ActivityTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => ActivityTypeAvgAggregate, {
    nullable: true
  })
  _avg!: ActivityTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => ActivityTypeSumAggregate, {
    nullable: true
  })
  _sum!: ActivityTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => ActivityTypeMinAggregate, {
    nullable: true
  })
  _min!: ActivityTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => ActivityTypeMaxAggregate, {
    nullable: true
  })
  _max!: ActivityTypeMaxAggregate | null;
}
