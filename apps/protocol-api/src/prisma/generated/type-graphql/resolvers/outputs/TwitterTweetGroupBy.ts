import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetAvgAggregate } from "../outputs/TwitterTweetAvgAggregate";
import { TwitterTweetCountAggregate } from "../outputs/TwitterTweetCountAggregate";
import { TwitterTweetMaxAggregate } from "../outputs/TwitterTweetMaxAggregate";
import { TwitterTweetMinAggregate } from "../outputs/TwitterTweetMinAggregate";
import { TwitterTweetSumAggregate } from "../outputs/TwitterTweetSumAggregate";

@TypeGraphQL.ObjectType("TwitterTweetGroupBy", {
  isAbstract: true
})
export class TwitterTweetGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  twitter_tweet_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  twitter_user_id!: number | null;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  twitter_tweet_contribution_ids!: number[] | null;

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
