import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryActivityTypeArgs } from "./args/AggregateCategoryActivityTypeArgs";
import { CreateManyCategoryActivityTypeArgs } from "./args/CreateManyCategoryActivityTypeArgs";
import { CreateOneCategoryActivityTypeArgs } from "./args/CreateOneCategoryActivityTypeArgs";
import { DeleteManyCategoryActivityTypeArgs } from "./args/DeleteManyCategoryActivityTypeArgs";
import { DeleteOneCategoryActivityTypeArgs } from "./args/DeleteOneCategoryActivityTypeArgs";
import { FindFirstCategoryActivityTypeArgs } from "./args/FindFirstCategoryActivityTypeArgs";
import { FindFirstCategoryActivityTypeOrThrowArgs } from "./args/FindFirstCategoryActivityTypeOrThrowArgs";
import { FindManyCategoryActivityTypeArgs } from "./args/FindManyCategoryActivityTypeArgs";
import { FindUniqueCategoryActivityTypeArgs } from "./args/FindUniqueCategoryActivityTypeArgs";
import { FindUniqueCategoryActivityTypeOrThrowArgs } from "./args/FindUniqueCategoryActivityTypeOrThrowArgs";
import { GroupByCategoryActivityTypeArgs } from "./args/GroupByCategoryActivityTypeArgs";
import { UpdateManyCategoryActivityTypeArgs } from "./args/UpdateManyCategoryActivityTypeArgs";
import { UpdateOneCategoryActivityTypeArgs } from "./args/UpdateOneCategoryActivityTypeArgs";
import { UpsertOneCategoryActivityTypeArgs } from "./args/UpsertOneCategoryActivityTypeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CategoryActivityType } from "../../../models/CategoryActivityType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCategoryActivityType } from "../../outputs/AggregateCategoryActivityType";
import { CategoryActivityTypeGroupBy } from "../../outputs/CategoryActivityTypeGroupBy";

@TypeGraphQL.Resolver(_of => CategoryActivityType)
export class CategoryActivityTypeCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoryActivityType, {
    nullable: false
  })
  async aggregateCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoryActivityTypeArgs): Promise<AggregateCategoryActivityType> {
    return getPrismaFromContext(ctx).categoryActivityType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCategoryActivityTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivityType, {
    nullable: false
  })
  async createOneCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCategoryActivityTypeArgs): Promise<CategoryActivityType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCategoryActivityTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivityType, {
    nullable: true
  })
  async deleteOneCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCategoryActivityTypeArgs): Promise<CategoryActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoryActivityType, {
    nullable: true
  })
  async findFirstCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCategoryActivityTypeArgs): Promise<CategoryActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoryActivityType, {
    nullable: true
  })
  async findFirstCategoryActivityTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCategoryActivityTypeOrThrowArgs): Promise<CategoryActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CategoryActivityType], {
    nullable: false
  })
  async categoryActivityTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCategoryActivityTypeArgs): Promise<CategoryActivityType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoryActivityType, {
    nullable: true
  })
  async categoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCategoryActivityTypeArgs): Promise<CategoryActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoryActivityType, {
    nullable: true
  })
  async getCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCategoryActivityTypeOrThrowArgs): Promise<CategoryActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CategoryActivityTypeGroupBy], {
    nullable: false
  })
  async groupByCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCategoryActivityTypeArgs): Promise<CategoryActivityTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCategoryActivityTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivityType, {
    nullable: true
  })
  async updateOneCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCategoryActivityTypeArgs): Promise<CategoryActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CategoryActivityType, {
    nullable: false
  })
  async upsertOneCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCategoryActivityTypeArgs): Promise<CategoryActivityType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
