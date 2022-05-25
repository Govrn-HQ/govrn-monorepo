import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetScalarWhereInput } from "../inputs/TwitterTweetScalarWhereInput";
import { TwitterTweetUpdateManyMutationInput } from "../inputs/TwitterTweetUpdateManyMutationInput";

@TypeGraphQL.InputType("TwitterTweetUpdateManyWithWhereWithoutTwitter_userInput", {
  isAbstract: true
})
export class TwitterTweetUpdateManyWithWhereWithoutTwitter_userInput {
  @TypeGraphQL.Field(_type => TwitterTweetScalarWhereInput, {
    nullable: false
  })
  where!: TwitterTweetScalarWhereInput;

  @TypeGraphQL.Field(_type => TwitterTweetUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitterTweetUpdateManyMutationInput;
}
