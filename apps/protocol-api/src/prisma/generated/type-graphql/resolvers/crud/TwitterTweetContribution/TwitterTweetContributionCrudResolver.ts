import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTwitterTweetContributionArgs } from "./args/AggregateTwitterTweetContributionArgs";
import { CreateManyTwitterTweetContributionArgs } from "./args/CreateManyTwitterTweetContributionArgs";
import { CreateOneTwitterTweetContributionArgs } from "./args/CreateOneTwitterTweetContributionArgs";
import { DeleteManyTwitterTweetContributionArgs } from "./args/DeleteManyTwitterTweetContributionArgs";
import { DeleteOneTwitterTweetContributionArgs } from "./args/DeleteOneTwitterTweetContributionArgs";
import { FindFirstTwitterTweetContributionArgs } from "./args/FindFirstTwitterTweetContributionArgs";
import { FindFirstTwitterTweetContributionOrThrowArgs } from "./args/FindFirstTwitterTweetContributionOrThrowArgs";
import { FindManyTwitterTweetContributionArgs } from "./args/FindManyTwitterTweetContributionArgs";
import { FindUniqueTwitterTweetContributionArgs } from "./args/FindUniqueTwitterTweetContributionArgs";
import { FindUniqueTwitterTweetContributionOrThrowArgs } from "./args/FindUniqueTwitterTweetContributionOrThrowArgs";
import { GroupByTwitterTweetContributionArgs } from "./args/GroupByTwitterTweetContributionArgs";
import { UpdateManyTwitterTweetContributionArgs } from "./args/UpdateManyTwitterTweetContributionArgs";
import { UpdateOneTwitterTweetContributionArgs } from "./args/UpdateOneTwitterTweetContributionArgs";
import { UpsertOneTwitterTweetContributionArgs } from "./args/UpsertOneTwitterTweetContributionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TwitterTweetContribution } from "../../../models/TwitterTweetContribution";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTwitterTweetContribution } from "../../outputs/AggregateTwitterTweetContribution";
import { TwitterTweetContributionGroupBy } from "../../outputs/TwitterTweetContributionGroupBy";

@TypeGraphQL.Resolver(_of => TwitterTweetContribution)
export class TwitterTweetContributionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTwitterTweetContribution, {
    nullable: false
  })
  async aggregateTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitterTweetContributionArgs): Promise<AggregateTwitterTweetContribution> {
    return getPrismaFromContext(ctx).twitterTweetContribution.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTwitterTweetContributionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterTweetContribution, {
    nullable: false
  })
  async createOneTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTwitterTweetContributionArgs): Promise<TwitterTweetContribution> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTwitterTweetContributionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterTweetContribution, {
    nullable: true
  })
  async deleteOneTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTwitterTweetContributionArgs): Promise<TwitterTweetContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterTweetContribution, {
    nullable: true
  })
  async findFirstTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterTweetContributionArgs): Promise<TwitterTweetContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterTweetContribution, {
    nullable: true
  })
  async findFirstTwitterTweetContributionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterTweetContributionOrThrowArgs): Promise<TwitterTweetContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TwitterTweetContribution], {
    nullable: false
  })
  async twitterTweetContributions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTwitterTweetContributionArgs): Promise<TwitterTweetContribution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterTweetContribution, {
    nullable: true
  })
  async twitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTwitterTweetContributionArgs): Promise<TwitterTweetContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterTweetContribution, {
    nullable: true
  })
  async getTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTwitterTweetContributionOrThrowArgs): Promise<TwitterTweetContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TwitterTweetContributionGroupBy], {
    nullable: false
  })
  async groupByTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTwitterTweetContributionArgs): Promise<TwitterTweetContributionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTwitterTweetContributionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterTweetContribution, {
    nullable: true
  })
  async updateOneTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTwitterTweetContributionArgs): Promise<TwitterTweetContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterTweetContribution, {
    nullable: false
  })
  async upsertOneTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTwitterTweetContributionArgs): Promise<TwitterTweetContribution> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
