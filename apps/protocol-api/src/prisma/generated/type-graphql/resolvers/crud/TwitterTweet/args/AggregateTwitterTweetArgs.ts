import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetOrderByWithRelationInput } from "../../../inputs/TwitterTweetOrderByWithRelationInput";
import { TwitterTweetWhereInput } from "../../../inputs/TwitterTweetWhereInput";
import { TwitterTweetWhereUniqueInput } from "../../../inputs/TwitterTweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTwitterTweetArgs {
  @TypeGraphQL.Field(_type => TwitterTweetWhereInput, {
    nullable: true
  })
  where?: TwitterTweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TwitterTweetOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: true
  })
  cursor?: TwitterTweetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
