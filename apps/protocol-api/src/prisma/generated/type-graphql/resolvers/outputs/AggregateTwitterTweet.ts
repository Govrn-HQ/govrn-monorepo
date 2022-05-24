import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetAvgAggregate } from "../outputs/TwitterTweetAvgAggregate";
import { TwitterTweetCountAggregate } from "../outputs/TwitterTweetCountAggregate";
import { TwitterTweetMaxAggregate } from "../outputs/TwitterTweetMaxAggregate";
import { TwitterTweetMinAggregate } from "../outputs/TwitterTweetMinAggregate";
import { TwitterTweetSumAggregate } from "../outputs/TwitterTweetSumAggregate";

@TypeGraphQL.ObjectType("AggregateTwitterTweet", {
  isAbstract: true
})
export class AggregateTwitterTweet {
  @TypeGraphQL.Field(_type => TwitterTweetCountAggregate, {
    nullable: true
  })
  _count!: TwitterTweetCountAggregate | null;

  @TypeGraphQL.Field(_type => TwitterTweetAvgAggregate, {
    nullable: true
  })
  _avg!: TwitterTweetAvgAggregate | null;

  @TypeGraphQL.Field(_type => TwitterTweetSumAggregate, {
    nullable: true
  })
  _sum!: TwitterTweetSumAggregate | null;

  @TypeGraphQL.Field(_type => TwitterTweetMinAggregate, {
    nullable: true
  })
  _min!: TwitterTweetMinAggregate | null;

  @TypeGraphQL.Field(_type => TwitterTweetMaxAggregate, {
    nullable: true
  })
  _max!: TwitterTweetMaxAggregate | null;
}
