import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateManyContributionInput } from "../inputs/TwitterTweetContributionCreateManyContributionInput";

@TypeGraphQL.InputType("TwitterTweetContributionCreateManyContributionInputEnvelope", {
  isAbstract: true
})
export class TwitterTweetContributionCreateManyContributionInputEnvelope {
  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateManyContributionInput], {
    nullable: false
  })
  data!: TwitterTweetContributionCreateManyContributionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
