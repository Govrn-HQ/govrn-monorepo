import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryActivityArgs } from "./args/AggregateCategoryActivityArgs";
import { CreateManyCategoryActivityArgs } from "./args/CreateManyCategoryActivityArgs";
import { CreateOneCategoryActivityArgs } from "./args/CreateOneCategoryActivityArgs";
import { DeleteManyCategoryActivityArgs } from "./args/DeleteManyCategoryActivityArgs";
import { DeleteOneCategoryActivityArgs } from "./args/DeleteOneCategoryActivityArgs";
import { FindFirstCategoryActivityArgs } from "./args/FindFirstCategoryActivityArgs";
import { FindFirstCategoryActivityOrThrowArgs } from "./args/FindFirstCategoryActivityOrThrowArgs";
import { FindManyCategoryActivityArgs } from "./args/FindManyCategoryActivityArgs";
import { FindUniqueCategoryActivityArgs } from "./args/FindUniqueCategoryActivityArgs";
import { FindUniqueCategoryActivityOrThrowArgs } from "./args/FindUniqueCategoryActivityOrThrowArgs";
import { GroupByCategoryActivityArgs } from "./args/GroupByCategoryActivityArgs";
import { UpdateManyCategoryActivityArgs } from "./args/UpdateManyCategoryActivityArgs";
import { UpdateOneCategoryActivityArgs } from "./args/UpdateOneCategoryActivityArgs";
import { UpsertOneCategoryActivityArgs } from "./args/UpsertOneCategoryActivityArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CategoryActivity } from "../../../models/CategoryActivity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCategoryActivity } from "../../outputs/AggregateCategoryActivity";
import { CategoryActivityGroupBy } from "../../outputs/CategoryActivityGroupBy";

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class CategoryActivityCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoryActivity, {
    nullable: false
  })
  async aggregateCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoryActivityArgs): Promise<AggregateCategoryActivity> {
    return getPrismaFromContext(ctx).categoryActivity.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCategoryActivityArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivity, {
    nullable: false
  })
  async createOneCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCategoryActivityArgs): Promise<CategoryActivity> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCategoryActivityArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivity, {
    nullable: true
  })
  async deleteOneCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCategoryActivityArgs): Promise<CategoryActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoryActivity, {
    nullable: true
  })
  async findFirstCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCategoryActivityArgs): Promise<CategoryActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoryActivity, {
    nullable: true
  })
  async findFirstCategoryActivityOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCategoryActivityOrThrowArgs): Promise<CategoryActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CategoryActivity], {
    nullable: false
  })
  async categoryActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCategoryActivityArgs): Promise<CategoryActivity[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoryActivity, {
    nullable: true
  })
  async categoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCategoryActivityArgs): Promise<CategoryActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoryActivity, {
    nullable: true
  })
  async getCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCategoryActivityOrThrowArgs): Promise<CategoryActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CategoryActivityGroupBy], {
    nullable: false
  })
  async groupByCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCategoryActivityArgs): Promise<CategoryActivityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCategoryActivityArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivity, {
    nullable: true
  })
  async updateOneCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCategoryActivityArgs): Promise<CategoryActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivity, {
    nullable: false
  })
  async upsertOneCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCategoryActivityArgs): Promise<CategoryActivity> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
