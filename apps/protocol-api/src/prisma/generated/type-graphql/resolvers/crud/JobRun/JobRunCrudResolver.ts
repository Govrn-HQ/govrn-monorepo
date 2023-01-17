import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateJobRunArgs } from "./args/AggregateJobRunArgs";
import { CreateManyJobRunArgs } from "./args/CreateManyJobRunArgs";
import { CreateOneJobRunArgs } from "./args/CreateOneJobRunArgs";
import { DeleteManyJobRunArgs } from "./args/DeleteManyJobRunArgs";
import { DeleteOneJobRunArgs } from "./args/DeleteOneJobRunArgs";
import { FindFirstJobRunArgs } from "./args/FindFirstJobRunArgs";
import { FindFirstJobRunOrThrowArgs } from "./args/FindFirstJobRunOrThrowArgs";
import { FindManyJobRunArgs } from "./args/FindManyJobRunArgs";
import { FindUniqueJobRunArgs } from "./args/FindUniqueJobRunArgs";
import { FindUniqueJobRunOrThrowArgs } from "./args/FindUniqueJobRunOrThrowArgs";
import { GroupByJobRunArgs } from "./args/GroupByJobRunArgs";
import { UpdateManyJobRunArgs } from "./args/UpdateManyJobRunArgs";
import { UpdateOneJobRunArgs } from "./args/UpdateOneJobRunArgs";
import { UpsertOneJobRunArgs } from "./args/UpsertOneJobRunArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { JobRun } from "../../../models/JobRun";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateJobRun } from "../../outputs/AggregateJobRun";
import { JobRunGroupBy } from "../../outputs/JobRunGroupBy";

@TypeGraphQL.Resolver(_of => JobRun)
export class JobRunCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateJobRun, {
    nullable: false
  })
  async aggregateJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJobRunArgs): Promise<AggregateJobRun> {
    return getPrismaFromContext(ctx).jobRun.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyJobRunArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => JobRun, {
    nullable: false
  })
  async createOneJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneJobRunArgs): Promise<JobRun> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyJobRunArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => JobRun, {
    nullable: true
  })
  async deleteOneJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneJobRunArgs): Promise<JobRun | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => JobRun, {
    nullable: true
  })
  async findFirstJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstJobRunArgs): Promise<JobRun | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => JobRun, {
    nullable: true
  })
  async findFirstJobRunOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstJobRunOrThrowArgs): Promise<JobRun | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [JobRun], {
    nullable: false
  })
  async jobRuns(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyJobRunArgs): Promise<JobRun[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => JobRun, {
    nullable: true
  })
  async jobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueJobRunArgs): Promise<JobRun | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => JobRun, {
    nullable: true
  })
  async getJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueJobRunOrThrowArgs): Promise<JobRun | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [JobRunGroupBy], {
    nullable: false
  })
  async groupByJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByJobRunArgs): Promise<JobRunGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyJobRunArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => JobRun, {
    nullable: true
  })
  async updateOneJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneJobRunArgs): Promise<JobRun | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => JobRun, {
    nullable: false
  })
  async upsertOneJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneJobRunArgs): Promise<JobRun> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
