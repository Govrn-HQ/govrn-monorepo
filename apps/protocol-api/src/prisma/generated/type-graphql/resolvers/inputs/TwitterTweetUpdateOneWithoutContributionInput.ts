import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetCreateOrConnectWithoutContributionInput } from "../inputs/TwitterTweetCreateOrConnectWithoutContributionInput";
import { TwitterTweetCreateWithoutContributionInput } from "../inputs/TwitterTweetCreateWithoutContributionInput";
import { TwitterTweetUpdateWithoutContributionInput } from "../inputs/TwitterTweetUpdateWithoutContributionInput";
import { TwitterTweetUpsertWithoutContributionInput } from "../inputs/TwitterTweetUpsertWithoutContributionInput";
import { TwitterTweetWhereUniqueInput } from "../inputs/TwitterTweetWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetUpdateOneWithoutContributionInput", {
  isAbstract: true
})
export class TwitterTweetUpdateOneWithoutContributionInput {
  @TypeGraphQL.Field(_type => TwitterTweetCreateWithoutContributionInput, {
    nullable: true
  })
  create?: TwitterTweetCreateWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetCreateOrConnectWithoutContributionInput, {
    nullable: true
  })
  connectOrCreate?: TwitterTweetCreateOrConnectWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetUpsertWithoutContributionInput, {
    nullable: true
  })
  upsert?: TwitterTweetUpsertWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: true
  })
  connect?: TwitterTweetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetUpdateWithoutContributionInput, {
    nullable: true
  })
  update?: TwitterTweetUpdateWithoutContributionInput | undefined;
}
