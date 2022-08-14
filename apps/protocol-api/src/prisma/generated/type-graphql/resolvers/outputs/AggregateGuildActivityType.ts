import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeAvgAggregate } from "../outputs/GuildActivityTypeAvgAggregate";
import { GuildActivityTypeCountAggregate } from "../outputs/GuildActivityTypeCountAggregate";
import { GuildActivityTypeMaxAggregate } from "../outputs/GuildActivityTypeMaxAggregate";
import { GuildActivityTypeMinAggregate } from "../outputs/GuildActivityTypeMinAggregate";
import { GuildActivityTypeSumAggregate } from "../outputs/GuildActivityTypeSumAggregate";

@TypeGraphQL.ObjectType("AggregateGuildActivityType", {
  isAbstract: true
})
export class AggregateGuildActivityType {
  @TypeGraphQL.Field(_type => GuildActivityTypeCountAggregate, {
    nullable: true
  })
  _count!: GuildActivityTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildActivityTypeAvgAggregate, {
    nullable: true
  })
  _avg!: GuildActivityTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildActivityTypeSumAggregate, {
    nullable: true
  })
  _sum!: GuildActivityTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildActivityTypeMinAggregate, {
    nullable: true
  })
  _min!: GuildActivityTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildActivityTypeMaxAggregate, {
    nullable: true
  })
  _max!: GuildActivityTypeMaxAggregate | null;
}
