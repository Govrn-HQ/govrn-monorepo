import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTwitterAccountArgs } from "./args/AggregateTwitterAccountArgs";
import { CreateManyTwitterAccountArgs } from "./args/CreateManyTwitterAccountArgs";
import { CreateOneTwitterAccountArgs } from "./args/CreateOneTwitterAccountArgs";
import { DeleteManyTwitterAccountArgs } from "./args/DeleteManyTwitterAccountArgs";
import { DeleteOneTwitterAccountArgs } from "./args/DeleteOneTwitterAccountArgs";
import { FindFirstTwitterAccountArgs } from "./args/FindFirstTwitterAccountArgs";
import { FindFirstTwitterAccountOrThrowArgs } from "./args/FindFirstTwitterAccountOrThrowArgs";
import { FindManyTwitterAccountArgs } from "./args/FindManyTwitterAccountArgs";
import { FindUniqueTwitterAccountArgs } from "./args/FindUniqueTwitterAccountArgs";
import { FindUniqueTwitterAccountOrThrowArgs } from "./args/FindUniqueTwitterAccountOrThrowArgs";
import { GroupByTwitterAccountArgs } from "./args/GroupByTwitterAccountArgs";
import { UpdateManyTwitterAccountArgs } from "./args/UpdateManyTwitterAccountArgs";
import { UpdateOneTwitterAccountArgs } from "./args/UpdateOneTwitterAccountArgs";
import { UpsertOneTwitterAccountArgs } from "./args/UpsertOneTwitterAccountArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TwitterAccount } from "../../../models/TwitterAccount";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTwitterAccount } from "../../outputs/AggregateTwitterAccount";
import { TwitterAccountGroupBy } from "../../outputs/TwitterAccountGroupBy";

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class TwitterAccountCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTwitterAccount, {
    nullable: false
  })
  async aggregateTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitterAccountArgs): Promise<AggregateTwitterAccount> {
    return getPrismaFromContext(ctx).twitterAccount.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTwitterAccountArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterAccount, {
    nullable: false
  })
  async createOneTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTwitterAccountArgs): Promise<TwitterAccount> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTwitterAccountArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterAccount, {
    nullable: true
  })
  async deleteOneTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTwitterAccountArgs): Promise<TwitterAccount | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterAccount, {
    nullable: true
  })
  async findFirstTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterAccountArgs): Promise<TwitterAccount | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterAccount, {
    nullable: true
  })
  async findFirstTwitterAccountOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterAccountOrThrowArgs): Promise<TwitterAccount | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TwitterAccount], {
    nullable: false
  })
  async twitterAccounts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTwitterAccountArgs): Promise<TwitterAccount[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterAccount, {
    nullable: true
  })
  async twitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTwitterAccountArgs): Promise<TwitterAccount | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterAccount, {
    nullable: true
  })
  async getTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTwitterAccountOrThrowArgs): Promise<TwitterAccount | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TwitterAccountGroupBy], {
    nullable: false
  })
  async groupByTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTwitterAccountArgs): Promise<TwitterAccountGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTwitterAccountArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterAccount, {
    nullable: true
  })
  async updateOneTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTwitterAccountArgs): Promise<TwitterAccount | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterAccount, {
    nullable: false
  })
  async upsertOneTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTwitterAccountArgs): Promise<TwitterAccount> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
