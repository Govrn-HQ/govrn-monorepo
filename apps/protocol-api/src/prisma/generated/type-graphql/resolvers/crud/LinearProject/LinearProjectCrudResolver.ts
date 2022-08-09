import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateLinearProjectArgs } from './args/AggregateLinearProjectArgs';
import { CreateLinearProjectArgs } from './args/CreateLinearProjectArgs';
import { CreateManyLinearProjectArgs } from './args/CreateManyLinearProjectArgs';
import { DeleteLinearProjectArgs } from './args/DeleteLinearProjectArgs';
import { DeleteManyLinearProjectArgs } from './args/DeleteManyLinearProjectArgs';
import { FindFirstLinearProjectArgs } from './args/FindFirstLinearProjectArgs';
import { FindManyLinearProjectArgs } from './args/FindManyLinearProjectArgs';
import { FindUniqueLinearProjectArgs } from './args/FindUniqueLinearProjectArgs';
import { GroupByLinearProjectArgs } from './args/GroupByLinearProjectArgs';
import { UpdateLinearProjectArgs } from './args/UpdateLinearProjectArgs';
import { UpdateManyLinearProjectArgs } from './args/UpdateManyLinearProjectArgs';
import { UpsertLinearProjectArgs } from './args/UpsertLinearProjectArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { LinearProject } from '../../../models/LinearProject';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateLinearProject } from '../../outputs/AggregateLinearProject';
import { LinearProjectGroupBy } from '../../outputs/LinearProjectGroupBy';

@TypeGraphQL.Resolver(_of => LinearProject)
export class LinearProjectCrudResolver {
  @TypeGraphQL.Query(_returns => LinearProject, {
    nullable: true,
  })
  async linearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueLinearProjectArgs,
  ): Promise<LinearProject | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LinearProject, {
    nullable: true,
  })
  async findFirstLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstLinearProjectArgs,
  ): Promise<LinearProject | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LinearProject], {
    nullable: false,
  })
  async linearProjects(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyLinearProjectArgs,
  ): Promise<LinearProject[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearProject, {
    nullable: false,
  })
  async createLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateLinearProjectArgs,
  ): Promise<LinearProject> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyLinearProjectArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearProject, {
    nullable: true,
  })
  async deleteLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteLinearProjectArgs,
  ): Promise<LinearProject | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearProject, {
    nullable: true,
  })
  async updateLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateLinearProjectArgs,
  ): Promise<LinearProject | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyLinearProjectArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyLinearProjectArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearProject, {
    nullable: false,
  })
  async upsertLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertLinearProjectArgs,
  ): Promise<LinearProject> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateLinearProject, {
    nullable: false,
  })
  async aggregateLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateLinearProjectArgs,
  ): Promise<AggregateLinearProject> {
    return getPrismaFromContext(ctx).linearProject.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [LinearProjectGroupBy], {
    nullable: false,
  })
  async groupByLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByLinearProjectArgs,
  ): Promise<LinearProjectGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).linearProject.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
