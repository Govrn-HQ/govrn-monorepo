import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityTypeAvgAggregate } from "../outputs/CategoryActivityTypeAvgAggregate";
import { CategoryActivityTypeCountAggregate } from "../outputs/CategoryActivityTypeCountAggregate";
import { CategoryActivityTypeMaxAggregate } from "../outputs/CategoryActivityTypeMaxAggregate";
import { CategoryActivityTypeMinAggregate } from "../outputs/CategoryActivityTypeMinAggregate";
import { CategoryActivityTypeSumAggregate } from "../outputs/CategoryActivityTypeSumAggregate";

@TypeGraphQL.ObjectType("AggregateCategoryActivityType", {
  isAbstract: true
})
export class AggregateCategoryActivityType {
  @TypeGraphQL.Field(_type => CategoryActivityTypeCountAggregate, {
    nullable: true
  })
  _count!: CategoryActivityTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => CategoryActivityTypeAvgAggregate, {
    nullable: true
  })
  _avg!: CategoryActivityTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => CategoryActivityTypeSumAggregate, {
    nullable: true
  })
  _sum!: CategoryActivityTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => CategoryActivityTypeMinAggregate, {
    nullable: true
  })
  _min!: CategoryActivityTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => CategoryActivityTypeMaxAggregate, {
    nullable: true
  })
  _max!: CategoryActivityTypeMaxAggregate | null;
}
