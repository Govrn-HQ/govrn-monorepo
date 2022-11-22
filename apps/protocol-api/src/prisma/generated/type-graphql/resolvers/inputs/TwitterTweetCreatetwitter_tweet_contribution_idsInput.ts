import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TwitterTweetCreatetwitter_tweet_contribution_idsInput", {
  isAbstract: true
})
export class TwitterTweetCreatetwitter_tweet_contribution_idsInput {
  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: false
  })
  set!: number[];
}
