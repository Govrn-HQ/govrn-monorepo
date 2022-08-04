import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateCategoryActivityTypeArgs } from './args/AggregateCategoryActivityTypeArgs';
import { CreateCategoryActivityTypeArgs } from './args/CreateCategoryActivityTypeArgs';
import { CreateManyCategoryActivityTypeArgs } from './args/CreateManyCategoryActivityTypeArgs';
import { DeleteCategoryActivityTypeArgs } from './args/DeleteCategoryActivityTypeArgs';
import { DeleteManyCategoryActivityTypeArgs } from './args/DeleteManyCategoryActivityTypeArgs';
import { FindFirstCategoryActivityTypeArgs } from './args/FindFirstCategoryActivityTypeArgs';
import { FindManyCategoryActivityTypeArgs } from './args/FindManyCategoryActivityTypeArgs';
import { FindUniqueCategoryActivityTypeArgs } from './args/FindUniqueCategoryActivityTypeArgs';
import { GroupByCategoryActivityTypeArgs } from './args/GroupByCategoryActivityTypeArgs';
import { UpdateCategoryActivityTypeArgs } from './args/UpdateCategoryActivityTypeArgs';
import { UpdateManyCategoryActivityTypeArgs } from './args/UpdateManyCategoryActivityTypeArgs';
import { UpsertCategoryActivityTypeArgs } from './args/UpsertCategoryActivityTypeArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { CategoryActivityType } from '../../../models/CategoryActivityType';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateCategoryActivityType } from '../../outputs/AggregateCategoryActivityType';
import { CategoryActivityTypeGroupBy } from '../../outputs/CategoryActivityTypeGroupBy';

@TypeGraphQL.Resolver(_of => CategoryActivityType)
export class CategoryActivityTypeCrudResolver {
  @TypeGraphQL.Query(_returns => CategoryActivityType, {
    nullable: true,
  })
  async categoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategoryActivityTypeArgs,
  ): Promise<CategoryActivityType | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoryActivityType, {
    nullable: true,
  })
  async findFirstCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategoryActivityTypeArgs,
  ): Promise<CategoryActivityType | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CategoryActivityType], {
    nullable: false,
  })
  async categoryActivityTypes(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategoryActivityTypeArgs,
  ): Promise<CategoryActivityType[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivityType, {
    nullable: false,
  })
  async createCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCategoryActivityTypeArgs,
  ): Promise<CategoryActivityType> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCategoryActivityTypeArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivityType, {
    nullable: true,
  })
  async deleteCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCategoryActivityTypeArgs,
  ): Promise<CategoryActivityType | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivityType, {
    nullable: true,
  })
  async updateCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCategoryActivityTypeArgs,
  ): Promise<CategoryActivityType | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCategoryActivityTypeArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCategoryActivityTypeArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivityType, {
    nullable: false,
  })
  async upsertCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCategoryActivityTypeArgs,
  ): Promise<CategoryActivityType> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateCategoryActivityType, {
    nullable: false,
  })
  async aggregateCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCategoryActivityTypeArgs,
  ): Promise<AggregateCategoryActivityType> {
    return getPrismaFromContext(ctx).categoryActivityType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [CategoryActivityTypeGroupBy], {
    nullable: false,
  })
  async groupByCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCategoryActivityTypeArgs,
  ): Promise<CategoryActivityTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).categoryActivityType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
