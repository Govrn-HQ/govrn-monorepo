import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainTypeAvgAggregate } from "../outputs/ChainTypeAvgAggregate";
import { ChainTypeCountAggregate } from "../outputs/ChainTypeCountAggregate";
import { ChainTypeMaxAggregate } from "../outputs/ChainTypeMaxAggregate";
import { ChainTypeMinAggregate } from "../outputs/ChainTypeMinAggregate";
import { ChainTypeSumAggregate } from "../outputs/ChainTypeSumAggregate";

@TypeGraphQL.ObjectType("AggregateChainType", {
  isAbstract: true
})
export class AggregateChainType {
  @TypeGraphQL.Field(_type => ChainTypeCountAggregate, {
    nullable: true
  })
  _count!: ChainTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => ChainTypeAvgAggregate, {
    nullable: true
  })
  _avg!: ChainTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChainTypeSumAggregate, {
    nullable: true
  })
  _sum!: ChainTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => ChainTypeMinAggregate, {
    nullable: true
  })
  _min!: ChainTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => ChainTypeMaxAggregate, {
    nullable: true
  })
  _max!: ChainTypeMaxAggregate | null;
}
