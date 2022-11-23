import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionWhereInput } from "../inputs/TwitterTweetContributionWhereInput";

@TypeGraphQL.InputType("TwitterTweetContributionListRelationFilter", {
  isAbstract: true
})
export class TwitterTweetContributionListRelationFilter {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereInput, {
    nullable: true
  })
  every?: TwitterTweetContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereInput, {
    nullable: true
  })
  some?: TwitterTweetContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereInput, {
    nullable: true
  })
  none?: TwitterTweetContributionWhereInput | undefined;
}
