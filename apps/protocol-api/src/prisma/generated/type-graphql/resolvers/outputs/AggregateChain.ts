import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainAvgAggregate } from "../outputs/ChainAvgAggregate";
import { ChainCountAggregate } from "../outputs/ChainCountAggregate";
import { ChainMaxAggregate } from "../outputs/ChainMaxAggregate";
import { ChainMinAggregate } from "../outputs/ChainMinAggregate";
import { ChainSumAggregate } from "../outputs/ChainSumAggregate";

@TypeGraphQL.ObjectType("AggregateChain", {
  isAbstract: true
})
export class AggregateChain {
  @TypeGraphQL.Field(_type => ChainCountAggregate, {
    nullable: true
  })
  _count!: ChainCountAggregate | null;

  @TypeGraphQL.Field(_type => ChainAvgAggregate, {
    nullable: true
  })
  _avg!: ChainAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChainSumAggregate, {
    nullable: true
  })
  _sum!: ChainSumAggregate | null;

  @TypeGraphQL.Field(_type => ChainMinAggregate, {
    nullable: true
  })
  _min!: ChainMinAggregate | null;

  @TypeGraphQL.Field(_type => ChainMaxAggregate, {
    nullable: true
  })
  _max!: ChainMaxAggregate | null;
}
