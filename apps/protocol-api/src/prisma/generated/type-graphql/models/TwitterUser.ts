import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { TwitterTweet } from '../models/TwitterTweet';
import { User } from '../models/User';
import { TwitterUserCount } from '../resolvers/outputs/TwitterUserCount';

@TypeGraphQL.ObjectType('TwitterUser', {
  isAbstract: true,
})
export class TwitterUser {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  twitter_user_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  user_id?: number | null;

  user?: User | null;

  tweets?: TwitterTweet[];

  @TypeGraphQL.Field(_type => TwitterUserCount, {
    nullable: true,
  })
  _count?: TwitterUserCount | null;
}
