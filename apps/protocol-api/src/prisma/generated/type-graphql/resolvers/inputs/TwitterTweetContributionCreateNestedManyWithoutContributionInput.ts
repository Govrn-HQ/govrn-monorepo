import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateManyContributionInputEnvelope } from "../inputs/TwitterTweetContributionCreateManyContributionInputEnvelope";
import { TwitterTweetContributionCreateOrConnectWithoutContributionInput } from "../inputs/TwitterTweetContributionCreateOrConnectWithoutContributionInput";
import { TwitterTweetContributionCreateWithoutContributionInput } from "../inputs/TwitterTweetContributionCreateWithoutContributionInput";
import { TwitterTweetContributionWhereUniqueInput } from "../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetContributionCreateNestedManyWithoutContributionInput", {
  isAbstract: true
})
export class TwitterTweetContributionCreateNestedManyWithoutContributionInput {
  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateWithoutContributionInput], {
    nullable: true
  })
  create?: TwitterTweetContributionCreateWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateOrConnectWithoutContributionInput], {
    nullable: true
  })
  connectOrCreate?: TwitterTweetContributionCreateOrConnectWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateManyContributionInputEnvelope, {
    nullable: true
  })
  createMany?: TwitterTweetContributionCreateManyContributionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: TwitterTweetContributionWhereUniqueInput[] | undefined;
}
