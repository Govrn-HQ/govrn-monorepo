import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLinearJobRunArgs } from "./args/AggregateLinearJobRunArgs";
import { CreateLinearJobRunArgs } from "./args/CreateLinearJobRunArgs";
import { CreateManyLinearJobRunArgs } from "./args/CreateManyLinearJobRunArgs";
import { DeleteLinearJobRunArgs } from "./args/DeleteLinearJobRunArgs";
import { DeleteManyLinearJobRunArgs } from "./args/DeleteManyLinearJobRunArgs";
import { FindFirstLinearJobRunArgs } from "./args/FindFirstLinearJobRunArgs";
import { FindManyLinearJobRunArgs } from "./args/FindManyLinearJobRunArgs";
import { FindUniqueLinearJobRunArgs } from "./args/FindUniqueLinearJobRunArgs";
import { GroupByLinearJobRunArgs } from "./args/GroupByLinearJobRunArgs";
import { UpdateLinearJobRunArgs } from "./args/UpdateLinearJobRunArgs";
import { UpdateManyLinearJobRunArgs } from "./args/UpdateManyLinearJobRunArgs";
import { UpsertLinearJobRunArgs } from "./args/UpsertLinearJobRunArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { LinearJobRun } from "../../../models/LinearJobRun";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLinearJobRun } from "../../outputs/AggregateLinearJobRun";
import { LinearJobRunGroupBy } from "../../outputs/LinearJobRunGroupBy";

@TypeGraphQL.Resolver(_of => LinearJobRun)
export class LinearJobRunCrudResolver {
  @TypeGraphQL.Query(_returns => LinearJobRun, {
    nullable: true
  })
  async linearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLinearJobRunArgs): Promise<LinearJobRun | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LinearJobRun, {
    nullable: true
  })
  async findFirstLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLinearJobRunArgs): Promise<LinearJobRun | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LinearJobRun], {
    nullable: false
  })
  async linearJobRuns(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLinearJobRunArgs): Promise<LinearJobRun[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearJobRun, {
    nullable: false
  })
  async createLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateLinearJobRunArgs): Promise<LinearJobRun> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyLinearJobRunArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearJobRun, {
    nullable: true
  })
  async deleteLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteLinearJobRunArgs): Promise<LinearJobRun | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearJobRun, {
    nullable: true
  })
  async updateLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateLinearJobRunArgs): Promise<LinearJobRun | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyLinearJobRunArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyLinearJobRunArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearJobRun, {
    nullable: false
  })
  async upsertLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertLinearJobRunArgs): Promise<LinearJobRun> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateLinearJobRun, {
    nullable: false
  })
  async aggregateLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLinearJobRunArgs): Promise<AggregateLinearJobRun> {
    return getPrismaFromContext(ctx).linearJobRun.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [LinearJobRunGroupBy], {
    nullable: false
  })
  async groupByLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLinearJobRunArgs): Promise<LinearJobRunGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
