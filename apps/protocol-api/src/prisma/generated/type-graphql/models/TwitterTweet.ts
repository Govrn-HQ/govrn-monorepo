import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { TwitterTweetContribution } from "../models/TwitterTweetContribution";
import { TwitterUser } from "../models/TwitterUser";
import { TwitterTweetCount } from "../resolvers/outputs/TwitterTweetCount";

@TypeGraphQL.ObjectType("TwitterTweet", {
  isAbstract: true
})
export class TwitterTweet {
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
  twitter_tweet_url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  twitter_user_id?: number | null;

  twitter_user?: TwitterUser | null;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: false
  })
  twitter_tweet_contribution_ids!: number[];

  twitter_tweet_contributions?: TwitterTweetContribution[];

  @TypeGraphQL.Field(_type => TwitterTweetCount, {
    nullable: true
  })
  _count?: TwitterTweetCount | null;
}
