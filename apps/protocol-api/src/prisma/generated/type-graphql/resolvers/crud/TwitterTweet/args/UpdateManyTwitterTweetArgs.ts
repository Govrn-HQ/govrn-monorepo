import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetUpdateManyMutationInput } from "../../../inputs/TwitterTweetUpdateManyMutationInput";
import { TwitterTweetWhereInput } from "../../../inputs/TwitterTweetWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTwitterTweetArgs {
  @TypeGraphQL.Field(_type => TwitterTweetUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitterTweetUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TwitterTweetWhereInput, {
    nullable: true
  })
  where?: TwitterTweetWhereInput | undefined;
}
