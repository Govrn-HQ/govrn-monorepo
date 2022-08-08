import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetCreateManyTwitter_userInputEnvelope } from "../inputs/TwitterTweetCreateManyTwitter_userInputEnvelope";
import { TwitterTweetCreateOrConnectWithoutTwitter_userInput } from "../inputs/TwitterTweetCreateOrConnectWithoutTwitter_userInput";
import { TwitterTweetCreateWithoutTwitter_userInput } from "../inputs/TwitterTweetCreateWithoutTwitter_userInput";
import { TwitterTweetScalarWhereInput } from "../inputs/TwitterTweetScalarWhereInput";
import { TwitterTweetUpdateManyWithWhereWithoutTwitter_userInput } from "../inputs/TwitterTweetUpdateManyWithWhereWithoutTwitter_userInput";
import { TwitterTweetUpdateWithWhereUniqueWithoutTwitter_userInput } from "../inputs/TwitterTweetUpdateWithWhereUniqueWithoutTwitter_userInput";
import { TwitterTweetUpsertWithWhereUniqueWithoutTwitter_userInput } from "../inputs/TwitterTweetUpsertWithWhereUniqueWithoutTwitter_userInput";
import { TwitterTweetWhereUniqueInput } from "../inputs/TwitterTweetWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetUpdateManyWithoutTwitter_userInput", {
  isAbstract: true
})
export class TwitterTweetUpdateManyWithoutTwitter_userInput {
  @TypeGraphQL.Field(_type => [TwitterTweetCreateWithoutTwitter_userInput], {
    nullable: true
  })
  create?: TwitterTweetCreateWithoutTwitter_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetCreateOrConnectWithoutTwitter_userInput], {
    nullable: true
  })
  connectOrCreate?: TwitterTweetCreateOrConnectWithoutTwitter_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetUpsertWithWhereUniqueWithoutTwitter_userInput], {
    nullable: true
  })
  upsert?: TwitterTweetUpsertWithWhereUniqueWithoutTwitter_userInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetCreateManyTwitter_userInputEnvelope, {
    nullable: true
  })
  createMany?: TwitterTweetCreateManyTwitter_userInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetWhereUniqueInput], {
    nullable: true
  })
  set?: TwitterTweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TwitterTweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetWhereUniqueInput], {
    nullable: true
  })
  delete?: TwitterTweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetWhereUniqueInput], {
    nullable: true
  })
  connect?: TwitterTweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetUpdateWithWhereUniqueWithoutTwitter_userInput], {
    nullable: true
  })
  update?: TwitterTweetUpdateWithWhereUniqueWithoutTwitter_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetUpdateManyWithWhereWithoutTwitter_userInput], {
    nullable: true
  })
  updateMany?: TwitterTweetUpdateManyWithWhereWithoutTwitter_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TwitterTweetScalarWhereInput[] | undefined;
}
