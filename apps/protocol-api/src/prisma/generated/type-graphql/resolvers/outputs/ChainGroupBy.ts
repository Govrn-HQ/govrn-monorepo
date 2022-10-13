import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainAvgAggregate } from "../outputs/ChainAvgAggregate";
import { ChainCountAggregate } from "../outputs/ChainCountAggregate";
import { ChainMaxAggregate } from "../outputs/ChainMaxAggregate";
import { ChainMinAggregate } from "../outputs/ChainMinAggregate";
import { ChainSumAggregate } from "../outputs/ChainSumAggregate";

@TypeGraphQL.ObjectType("ChainGroupBy", {
  isAbstract: true
})
export class ChainGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chain_id!: string;

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
