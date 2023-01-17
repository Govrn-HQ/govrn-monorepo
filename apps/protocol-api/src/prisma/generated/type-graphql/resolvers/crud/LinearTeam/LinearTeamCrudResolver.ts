import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLinearTeamArgs } from "./args/AggregateLinearTeamArgs";
import { CreateManyLinearTeamArgs } from "./args/CreateManyLinearTeamArgs";
import { CreateOneLinearTeamArgs } from "./args/CreateOneLinearTeamArgs";
import { DeleteManyLinearTeamArgs } from "./args/DeleteManyLinearTeamArgs";
import { DeleteOneLinearTeamArgs } from "./args/DeleteOneLinearTeamArgs";
import { FindFirstLinearTeamArgs } from "./args/FindFirstLinearTeamArgs";
import { FindFirstLinearTeamOrThrowArgs } from "./args/FindFirstLinearTeamOrThrowArgs";
import { FindManyLinearTeamArgs } from "./args/FindManyLinearTeamArgs";
import { FindUniqueLinearTeamArgs } from "./args/FindUniqueLinearTeamArgs";
import { FindUniqueLinearTeamOrThrowArgs } from "./args/FindUniqueLinearTeamOrThrowArgs";
import { GroupByLinearTeamArgs } from "./args/GroupByLinearTeamArgs";
import { UpdateManyLinearTeamArgs } from "./args/UpdateManyLinearTeamArgs";
import { UpdateOneLinearTeamArgs } from "./args/UpdateOneLinearTeamArgs";
import { UpsertOneLinearTeamArgs } from "./args/UpsertOneLinearTeamArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { LinearTeam } from "../../../models/LinearTeam";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLinearTeam } from "../../outputs/AggregateLinearTeam";
import { LinearTeamGroupBy } from "../../outputs/LinearTeamGroupBy";

@TypeGraphQL.Resolver(_of => LinearTeam)
export class LinearTeamCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLinearTeam, {
    nullable: false
  })
  async aggregateLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLinearTeamArgs): Promise<AggregateLinearTeam> {
    return getPrismaFromContext(ctx).linearTeam.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyLinearTeamArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearTeam, {
    nullable: false
  })
  async createOneLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneLinearTeamArgs): Promise<LinearTeam> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyLinearTeamArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearTeam, {
    nullable: true
  })
  async deleteOneLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneLinearTeamArgs): Promise<LinearTeam | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LinearTeam, {
    nullable: true
  })
  async findFirstLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLinearTeamArgs): Promise<LinearTeam | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LinearTeam, {
    nullable: true
  })
  async findFirstLinearTeamOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLinearTeamOrThrowArgs): Promise<LinearTeam | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LinearTeam], {
    nullable: false
  })
  async linearTeams(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLinearTeamArgs): Promise<LinearTeam[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LinearTeam, {
    nullable: true
  })
  async linearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLinearTeamArgs): Promise<LinearTeam | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LinearTeam, {
    nullable: true
  })
  async getLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLinearTeamOrThrowArgs): Promise<LinearTeam | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LinearTeamGroupBy], {
    nullable: false
  })
  async groupByLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLinearTeamArgs): Promise<LinearTeamGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyLinearTeamArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearTeam, {
    nullable: true
  })
  async updateOneLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneLinearTeamArgs): Promise<LinearTeam | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearTeam, {
    nullable: false
  })
  async upsertOneLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneLinearTeamArgs): Promise<LinearTeam> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
