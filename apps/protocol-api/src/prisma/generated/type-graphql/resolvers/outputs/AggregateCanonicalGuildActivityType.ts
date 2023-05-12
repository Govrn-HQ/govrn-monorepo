import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeAvgAggregate } from "../outputs/CanonicalGuildActivityTypeAvgAggregate";
import { CanonicalGuildActivityTypeCountAggregate } from "../outputs/CanonicalGuildActivityTypeCountAggregate";
import { CanonicalGuildActivityTypeMaxAggregate } from "../outputs/CanonicalGuildActivityTypeMaxAggregate";
import { CanonicalGuildActivityTypeMinAggregate } from "../outputs/CanonicalGuildActivityTypeMinAggregate";
import { CanonicalGuildActivityTypeSumAggregate } from "../outputs/CanonicalGuildActivityTypeSumAggregate";

@TypeGraphQL.ObjectType("AggregateCanonicalGuildActivityType", {
  isAbstract: true
})
export class AggregateCanonicalGuildActivityType {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCountAggregate, {
    nullable: true
  })
  _count!: CanonicalGuildActivityTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeAvgAggregate, {
    nullable: true
  })
  _avg!: CanonicalGuildActivityTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeSumAggregate, {
    nullable: true
  })
  _sum!: CanonicalGuildActivityTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeMinAggregate, {
    nullable: true
  })
  _min!: CanonicalGuildActivityTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeMaxAggregate, {
    nullable: true
  })
  _max!: CanonicalGuildActivityTypeMaxAggregate | null;
}
