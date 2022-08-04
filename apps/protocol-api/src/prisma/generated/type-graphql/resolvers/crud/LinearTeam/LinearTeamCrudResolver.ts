import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateLinearTeamArgs } from './args/AggregateLinearTeamArgs';
import { CreateLinearTeamArgs } from './args/CreateLinearTeamArgs';
import { CreateManyLinearTeamArgs } from './args/CreateManyLinearTeamArgs';
import { DeleteLinearTeamArgs } from './args/DeleteLinearTeamArgs';
import { DeleteManyLinearTeamArgs } from './args/DeleteManyLinearTeamArgs';
import { FindFirstLinearTeamArgs } from './args/FindFirstLinearTeamArgs';
import { FindManyLinearTeamArgs } from './args/FindManyLinearTeamArgs';
import { FindUniqueLinearTeamArgs } from './args/FindUniqueLinearTeamArgs';
import { GroupByLinearTeamArgs } from './args/GroupByLinearTeamArgs';
import { UpdateLinearTeamArgs } from './args/UpdateLinearTeamArgs';
import { UpdateManyLinearTeamArgs } from './args/UpdateManyLinearTeamArgs';
import { UpsertLinearTeamArgs } from './args/UpsertLinearTeamArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { LinearTeam } from '../../../models/LinearTeam';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateLinearTeam } from '../../outputs/AggregateLinearTeam';
import { LinearTeamGroupBy } from '../../outputs/LinearTeamGroupBy';

@TypeGraphQL.Resolver(_of => LinearTeam)
export class LinearTeamCrudResolver {
  @TypeGraphQL.Query(_returns => LinearTeam, {
    nullable: true,
  })
  async linearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueLinearTeamArgs,
  ): Promise<LinearTeam | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LinearTeam, {
    nullable: true,
  })
  async findFirstLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstLinearTeamArgs,
  ): Promise<LinearTeam | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LinearTeam], {
    nullable: false,
  })
  async linearTeams(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyLinearTeamArgs,
  ): Promise<LinearTeam[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearTeam, {
    nullable: false,
  })
  async createLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateLinearTeamArgs,
  ): Promise<LinearTeam> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyLinearTeamArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearTeam, {
    nullable: true,
  })
  async deleteLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteLinearTeamArgs,
  ): Promise<LinearTeam | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearTeam, {
    nullable: true,
  })
  async updateLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateLinearTeamArgs,
  ): Promise<LinearTeam | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyLinearTeamArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyLinearTeamArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearTeam, {
    nullable: false,
  })
  async upsertLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertLinearTeamArgs,
  ): Promise<LinearTeam> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateLinearTeam, {
    nullable: false,
  })
  async aggregateLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateLinearTeamArgs,
  ): Promise<AggregateLinearTeam> {
    return getPrismaFromContext(ctx).linearTeam.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [LinearTeamGroupBy], {
    nullable: false,
  })
  async groupByLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByLinearTeamArgs,
  ): Promise<LinearTeamGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).linearTeam.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
