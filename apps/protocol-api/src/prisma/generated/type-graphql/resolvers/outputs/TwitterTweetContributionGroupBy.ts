import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionAvgAggregate } from "../outputs/TwitterTweetContributionAvgAggregate";
import { TwitterTweetContributionCountAggregate } from "../outputs/TwitterTweetContributionCountAggregate";
import { TwitterTweetContributionMaxAggregate } from "../outputs/TwitterTweetContributionMaxAggregate";
import { TwitterTweetContributionMinAggregate } from "../outputs/TwitterTweetContributionMinAggregate";
import { TwitterTweetContributionSumAggregate } from "../outputs/TwitterTweetContributionSumAggregate";

@TypeGraphQL.ObjectType("TwitterTweetContributionGroupBy", {
  isAbstract: true
})
export class TwitterTweetContributionGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  contribution_id!: number;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCountAggregate, {
    nullable: true
  })
  _count!: TwitterTweetContributionCountAggregate | null;

  @TypeGraphQL.Field(_type => TwitterTweetContributionAvgAggregate, {
    nullable: true
  })
  _avg!: TwitterTweetContributionAvgAggregate | null;

  @TypeGraphQL.Field(_type => TwitterTweetContributionSumAggregate, {
    nullable: true
  })
  _sum!: TwitterTweetContributionSumAggregate | null;

  @TypeGraphQL.Field(_type => TwitterTweetContributionMinAggregate, {
    nullable: true
  })
  _min!: TwitterTweetContributionMinAggregate | null;

  @TypeGraphQL.Field(_type => TwitterTweetContributionMaxAggregate, {
    nullable: true
  })
  _max!: TwitterTweetContributionMaxAggregate | null;
}
