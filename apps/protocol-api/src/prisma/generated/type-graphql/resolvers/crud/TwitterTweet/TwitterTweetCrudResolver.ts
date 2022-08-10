import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateTwitterTweetArgs } from './args/AggregateTwitterTweetArgs';
import { CreateManyTwitterTweetArgs } from './args/CreateManyTwitterTweetArgs';
import { CreateTwitterTweetArgs } from './args/CreateTwitterTweetArgs';
import { DeleteManyTwitterTweetArgs } from './args/DeleteManyTwitterTweetArgs';
import { DeleteTwitterTweetArgs } from './args/DeleteTwitterTweetArgs';
import { FindFirstTwitterTweetArgs } from './args/FindFirstTwitterTweetArgs';
import { FindManyTwitterTweetArgs } from './args/FindManyTwitterTweetArgs';
import { FindUniqueTwitterTweetArgs } from './args/FindUniqueTwitterTweetArgs';
import { GroupByTwitterTweetArgs } from './args/GroupByTwitterTweetArgs';
import { UpdateManyTwitterTweetArgs } from './args/UpdateManyTwitterTweetArgs';
import { UpdateTwitterTweetArgs } from './args/UpdateTwitterTweetArgs';
import { UpsertTwitterTweetArgs } from './args/UpsertTwitterTweetArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { TwitterTweet } from '../../../models/TwitterTweet';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateTwitterTweet } from '../../outputs/AggregateTwitterTweet';
import { TwitterTweetGroupBy } from '../../outputs/TwitterTweetGroupBy';

@TypeGraphQL.Resolver(_of => TwitterTweet)
export class TwitterTweetCrudResolver {
  @TypeGraphQL.Query(_returns => TwitterTweet, {
    nullable: true,
  })
  async twitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueTwitterTweetArgs,
  ): Promise<TwitterTweet | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterTweet, {
    nullable: true,
  })
  async findFirstTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstTwitterTweetArgs,
  ): Promise<TwitterTweet | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TwitterTweet], {
    nullable: false,
  })
  async twitterTweets(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyTwitterTweetArgs,
  ): Promise<TwitterTweet[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterTweet, {
    nullable: false,
  })
  async createTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateTwitterTweetArgs,
  ): Promise<TwitterTweet> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyTwitterTweetArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterTweet, {
    nullable: true,
  })
  async deleteTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteTwitterTweetArgs,
  ): Promise<TwitterTweet | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterTweet, {
    nullable: true,
  })
  async updateTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateTwitterTweetArgs,
  ): Promise<TwitterTweet | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyTwitterTweetArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyTwitterTweetArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterTweet, {
    nullable: false,
  })
  async upsertTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertTwitterTweetArgs,
  ): Promise<TwitterTweet> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateTwitterTweet, {
    nullable: false,
  })
  async aggregateTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateTwitterTweetArgs,
  ): Promise<AggregateTwitterTweet> {
    return getPrismaFromContext(ctx).twitterTweet.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [TwitterTweetGroupBy], {
    nullable: false,
  })
  async groupByTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByTwitterTweetArgs,
  ): Promise<TwitterTweetGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).twitterTweet.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
