import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountAvgAggregate } from "../outputs/TwitterAccountAvgAggregate";
import { TwitterAccountCountAggregate } from "../outputs/TwitterAccountCountAggregate";
import { TwitterAccountMaxAggregate } from "../outputs/TwitterAccountMaxAggregate";
import { TwitterAccountMinAggregate } from "../outputs/TwitterAccountMinAggregate";
import { TwitterAccountSumAggregate } from "../outputs/TwitterAccountSumAggregate";

@TypeGraphQL.ObjectType("AggregateTwitterAccount", {
  isAbstract: true
})
export class AggregateTwitterAccount {
  @TypeGraphQL.Field(_type => TwitterAccountCountAggregate, {
    nullable: true
  })
  _count!: TwitterAccountCountAggregate | null;

  @TypeGraphQL.Field(_type => TwitterAccountAvgAggregate, {
    nullable: true
  })
  _avg!: TwitterAccountAvgAggregate | null;

  @TypeGraphQL.Field(_type => TwitterAccountSumAggregate, {
    nullable: true
  })
  _sum!: TwitterAccountSumAggregate | null;

  @TypeGraphQL.Field(_type => TwitterAccountMinAggregate, {
    nullable: true
  })
  _min!: TwitterAccountMinAggregate | null;

  @TypeGraphQL.Field(_type => TwitterAccountMaxAggregate, {
    nullable: true
  })
  _max!: TwitterAccountMaxAggregate | null;
}
