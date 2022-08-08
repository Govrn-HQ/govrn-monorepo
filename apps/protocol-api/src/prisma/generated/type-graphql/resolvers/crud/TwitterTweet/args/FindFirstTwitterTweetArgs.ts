import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { TwitterTweetOrderByWithRelationInput } from '../../../inputs/TwitterTweetOrderByWithRelationInput';
import { TwitterTweetWhereInput } from '../../../inputs/TwitterTweetWhereInput';
import { TwitterTweetWhereUniqueInput } from '../../../inputs/TwitterTweetWhereUniqueInput';
import { TwitterTweetScalarFieldEnum } from '../../../../enums/TwitterTweetScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class FindFirstTwitterTweetArgs {
  @TypeGraphQL.Field(_type => TwitterTweetWhereInput, {
    nullable: true,
  })
  where?: TwitterTweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: TwitterTweetOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: true,
  })
  cursor?: TwitterTweetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | 'id'
        | 'createdAt'
        | 'updatedAt'
        | 'twitter_tweet_id'
        | 'text'
        | 'twitter_user_id'
        | 'contribution_id'
      >
    | undefined;
}
