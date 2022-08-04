import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateCategoryActivityArgs } from './args/AggregateCategoryActivityArgs';
import { CreateCategoryActivityArgs } from './args/CreateCategoryActivityArgs';
import { CreateManyCategoryActivityArgs } from './args/CreateManyCategoryActivityArgs';
import { DeleteCategoryActivityArgs } from './args/DeleteCategoryActivityArgs';
import { DeleteManyCategoryActivityArgs } from './args/DeleteManyCategoryActivityArgs';
import { FindFirstCategoryActivityArgs } from './args/FindFirstCategoryActivityArgs';
import { FindManyCategoryActivityArgs } from './args/FindManyCategoryActivityArgs';
import { FindUniqueCategoryActivityArgs } from './args/FindUniqueCategoryActivityArgs';
import { GroupByCategoryActivityArgs } from './args/GroupByCategoryActivityArgs';
import { UpdateCategoryActivityArgs } from './args/UpdateCategoryActivityArgs';
import { UpdateManyCategoryActivityArgs } from './args/UpdateManyCategoryActivityArgs';
import { UpsertCategoryActivityArgs } from './args/UpsertCategoryActivityArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { CategoryActivity } from '../../../models/CategoryActivity';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateCategoryActivity } from '../../outputs/AggregateCategoryActivity';
import { CategoryActivityGroupBy } from '../../outputs/CategoryActivityGroupBy';

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class CategoryActivityCrudResolver {
  @TypeGraphQL.Query(_returns => CategoryActivity, {
    nullable: true,
  })
  async categoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategoryActivityArgs,
  ): Promise<CategoryActivity | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoryActivity, {
    nullable: true,
  })
  async findFirstCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategoryActivityArgs,
  ): Promise<CategoryActivity | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CategoryActivity], {
    nullable: false,
  })
  async categoryActivities(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategoryActivityArgs,
  ): Promise<CategoryActivity[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivity, {
    nullable: false,
  })
  async createCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCategoryActivityArgs,
  ): Promise<CategoryActivity> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCategoryActivityArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivity, {
    nullable: true,
  })
  async deleteCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCategoryActivityArgs,
  ): Promise<CategoryActivity | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivity, {
    nullable: true,
  })
  async updateCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCategoryActivityArgs,
  ): Promise<CategoryActivity | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCategoryActivityArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCategoryActivityArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivity, {
    nullable: false,
  })
  async upsertCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCategoryActivityArgs,
  ): Promise<CategoryActivity> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateCategoryActivity, {
    nullable: false,
  })
  async aggregateCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCategoryActivityArgs,
  ): Promise<AggregateCategoryActivity> {
    return getPrismaFromContext(ctx).categoryActivity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [CategoryActivityGroupBy], {
    nullable: false,
  })
  async groupByCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCategoryActivityArgs,
  ): Promise<CategoryActivityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).categoryActivity.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
