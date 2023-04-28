import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCanonicalGuildActivityTypeArgs } from "./args/AggregateCanonicalGuildActivityTypeArgs";
import { CreateManyCanonicalGuildActivityTypeArgs } from "./args/CreateManyCanonicalGuildActivityTypeArgs";
import { CreateOneCanonicalGuildActivityTypeArgs } from "./args/CreateOneCanonicalGuildActivityTypeArgs";
import { DeleteManyCanonicalGuildActivityTypeArgs } from "./args/DeleteManyCanonicalGuildActivityTypeArgs";
import { DeleteOneCanonicalGuildActivityTypeArgs } from "./args/DeleteOneCanonicalGuildActivityTypeArgs";
import { FindFirstCanonicalGuildActivityTypeArgs } from "./args/FindFirstCanonicalGuildActivityTypeArgs";
import { FindFirstCanonicalGuildActivityTypeOrThrowArgs } from "./args/FindFirstCanonicalGuildActivityTypeOrThrowArgs";
import { FindManyCanonicalGuildActivityTypeArgs } from "./args/FindManyCanonicalGuildActivityTypeArgs";
import { FindUniqueCanonicalGuildActivityTypeArgs } from "./args/FindUniqueCanonicalGuildActivityTypeArgs";
import { FindUniqueCanonicalGuildActivityTypeOrThrowArgs } from "./args/FindUniqueCanonicalGuildActivityTypeOrThrowArgs";
import { GroupByCanonicalGuildActivityTypeArgs } from "./args/GroupByCanonicalGuildActivityTypeArgs";
import { UpdateManyCanonicalGuildActivityTypeArgs } from "./args/UpdateManyCanonicalGuildActivityTypeArgs";
import { UpdateOneCanonicalGuildActivityTypeArgs } from "./args/UpdateOneCanonicalGuildActivityTypeArgs";
import { UpsertOneCanonicalGuildActivityTypeArgs } from "./args/UpsertOneCanonicalGuildActivityTypeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CanonicalGuildActivityType } from "../../../models/CanonicalGuildActivityType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCanonicalGuildActivityType } from "../../outputs/AggregateCanonicalGuildActivityType";
import { CanonicalGuildActivityTypeGroupBy } from "../../outputs/CanonicalGuildActivityTypeGroupBy";

@TypeGraphQL.Resolver(_of => CanonicalGuildActivityType)
export class CanonicalGuildActivityTypeCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCanonicalGuildActivityType, {
    nullable: false
  })
  async aggregateCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCanonicalGuildActivityTypeArgs): Promise<AggregateCanonicalGuildActivityType> {
    return getPrismaFromContext(ctx).canonicalGuildActivityType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCanonicalGuildActivityTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CanonicalGuildActivityType, {
    nullable: false
  })
  async createOneCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCanonicalGuildActivityTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CanonicalGuildActivityType, {
    nullable: true
  })
  async deleteOneCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CanonicalGuildActivityType, {
    nullable: true
  })
  async findFirstCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CanonicalGuildActivityType, {
    nullable: true
  })
  async findFirstCanonicalGuildActivityTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCanonicalGuildActivityTypeOrThrowArgs): Promise<CanonicalGuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CanonicalGuildActivityType], {
    nullable: false
  })
  async canonicalGuildActivityTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CanonicalGuildActivityType, {
    nullable: true
  })
  async canonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CanonicalGuildActivityType, {
    nullable: true
  })
  async getCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCanonicalGuildActivityTypeOrThrowArgs): Promise<CanonicalGuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CanonicalGuildActivityTypeGroupBy], {
    nullable: false
  })
  async groupByCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCanonicalGuildActivityTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CanonicalGuildActivityType, {
    nullable: true
  })
  async updateOneCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CanonicalGuildActivityType, {
    nullable: false
  })
  async upsertOneCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
