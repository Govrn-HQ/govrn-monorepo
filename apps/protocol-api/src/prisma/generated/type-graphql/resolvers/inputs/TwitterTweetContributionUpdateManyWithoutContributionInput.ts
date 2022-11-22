import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateManyContributionInputEnvelope } from "../inputs/TwitterTweetContributionCreateManyContributionInputEnvelope";
import { TwitterTweetContributionCreateOrConnectWithoutContributionInput } from "../inputs/TwitterTweetContributionCreateOrConnectWithoutContributionInput";
import { TwitterTweetContributionCreateWithoutContributionInput } from "../inputs/TwitterTweetContributionCreateWithoutContributionInput";
import { TwitterTweetContributionScalarWhereInput } from "../inputs/TwitterTweetContributionScalarWhereInput";
import { TwitterTweetContributionUpdateManyWithWhereWithoutContributionInput } from "../inputs/TwitterTweetContributionUpdateManyWithWhereWithoutContributionInput";
import { TwitterTweetContributionUpdateWithWhereUniqueWithoutContributionInput } from "../inputs/TwitterTweetContributionUpdateWithWhereUniqueWithoutContributionInput";
import { TwitterTweetContributionUpsertWithWhereUniqueWithoutContributionInput } from "../inputs/TwitterTweetContributionUpsertWithWhereUniqueWithoutContributionInput";
import { TwitterTweetContributionWhereUniqueInput } from "../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetContributionUpdateManyWithoutContributionInput", {
  isAbstract: true
})
export class TwitterTweetContributionUpdateManyWithoutContributionInput {
  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateWithoutContributionInput], {
    nullable: true
  })
  create?: TwitterTweetContributionCreateWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateOrConnectWithoutContributionInput], {
    nullable: true
  })
  connectOrCreate?: TwitterTweetContributionCreateOrConnectWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionUpsertWithWhereUniqueWithoutContributionInput], {
    nullable: true
  })
  upsert?: TwitterTweetContributionUpsertWithWhereUniqueWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateManyContributionInputEnvelope, {
    nullable: true
  })
  createMany?: TwitterTweetContributionCreateManyContributionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereUniqueInput], {
    nullable: true
  })
  set?: TwitterTweetContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TwitterTweetContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereUniqueInput], {
    nullable: true
  })
  delete?: TwitterTweetContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: TwitterTweetContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionUpdateWithWhereUniqueWithoutContributionInput], {
    nullable: true
  })
  update?: TwitterTweetContributionUpdateWithWhereUniqueWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionUpdateManyWithWhereWithoutContributionInput], {
    nullable: true
  })
  updateMany?: TwitterTweetContributionUpdateManyWithWhereWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TwitterTweetContributionScalarWhereInput[] | undefined;
}
