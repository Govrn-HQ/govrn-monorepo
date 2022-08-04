import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('TwitterTweetAvgAggregate', {
  isAbstract: true,
})
export class TwitterTweetAvgAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  twitter_tweet_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  twitter_user_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  contribution_id!: number | null;
}
