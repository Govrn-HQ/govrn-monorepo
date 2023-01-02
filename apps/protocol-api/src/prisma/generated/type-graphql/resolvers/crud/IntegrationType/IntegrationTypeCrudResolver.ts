import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIntegrationTypeArgs } from "./args/AggregateIntegrationTypeArgs";
import { CreateManyIntegrationTypeArgs } from "./args/CreateManyIntegrationTypeArgs";
import { CreateOneIntegrationTypeArgs } from "./args/CreateOneIntegrationTypeArgs";
import { DeleteManyIntegrationTypeArgs } from "./args/DeleteManyIntegrationTypeArgs";
import { DeleteOneIntegrationTypeArgs } from "./args/DeleteOneIntegrationTypeArgs";
import { FindFirstIntegrationTypeArgs } from "./args/FindFirstIntegrationTypeArgs";
import { FindFirstIntegrationTypeOrThrowArgs } from "./args/FindFirstIntegrationTypeOrThrowArgs";
import { FindManyIntegrationTypeArgs } from "./args/FindManyIntegrationTypeArgs";
import { FindUniqueIntegrationTypeArgs } from "./args/FindUniqueIntegrationTypeArgs";
import { FindUniqueIntegrationTypeOrThrowArgs } from "./args/FindUniqueIntegrationTypeOrThrowArgs";
import { GroupByIntegrationTypeArgs } from "./args/GroupByIntegrationTypeArgs";
import { UpdateManyIntegrationTypeArgs } from "./args/UpdateManyIntegrationTypeArgs";
import { UpdateOneIntegrationTypeArgs } from "./args/UpdateOneIntegrationTypeArgs";
import { UpsertOneIntegrationTypeArgs } from "./args/UpsertOneIntegrationTypeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { IntegrationType } from "../../../models/IntegrationType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIntegrationType } from "../../outputs/AggregateIntegrationType";
import { IntegrationTypeGroupBy } from "../../outputs/IntegrationTypeGroupBy";

@TypeGraphQL.Resolver(_of => IntegrationType)
export class IntegrationTypeCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateIntegrationType, {
    nullable: false
  })
  async aggregateIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIntegrationTypeArgs): Promise<AggregateIntegrationType> {
    return getPrismaFromContext(ctx).integrationType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyIntegrationTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IntegrationType, {
    nullable: false
  })
  async createOneIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneIntegrationTypeArgs): Promise<IntegrationType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyIntegrationTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IntegrationType, {
    nullable: true
  })
  async deleteOneIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneIntegrationTypeArgs): Promise<IntegrationType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IntegrationType, {
    nullable: true
  })
  async findFirstIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIntegrationTypeArgs): Promise<IntegrationType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IntegrationType, {
    nullable: true
  })
  async findFirstIntegrationTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIntegrationTypeOrThrowArgs): Promise<IntegrationType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [IntegrationType], {
    nullable: false
  })
  async integrationTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyIntegrationTypeArgs): Promise<IntegrationType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IntegrationType, {
    nullable: true
  })
  async integrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIntegrationTypeArgs): Promise<IntegrationType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IntegrationType, {
    nullable: true
  })
  async getIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIntegrationTypeOrThrowArgs): Promise<IntegrationType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [IntegrationTypeGroupBy], {
    nullable: false
  })
  async groupByIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIntegrationTypeArgs): Promise<IntegrationTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyIntegrationTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IntegrationType, {
    nullable: true
  })
  async updateOneIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneIntegrationTypeArgs): Promise<IntegrationType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IntegrationType, {
    nullable: false
  })
  async upsertOneIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneIntegrationTypeArgs): Promise<IntegrationType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
