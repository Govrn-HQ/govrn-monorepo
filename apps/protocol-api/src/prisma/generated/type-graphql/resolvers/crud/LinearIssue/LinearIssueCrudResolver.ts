import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateLinearIssueArgs } from './args/AggregateLinearIssueArgs';
import { CreateLinearIssueArgs } from './args/CreateLinearIssueArgs';
import { CreateManyLinearIssueArgs } from './args/CreateManyLinearIssueArgs';
import { DeleteLinearIssueArgs } from './args/DeleteLinearIssueArgs';
import { DeleteManyLinearIssueArgs } from './args/DeleteManyLinearIssueArgs';
import { FindFirstLinearIssueArgs } from './args/FindFirstLinearIssueArgs';
import { FindManyLinearIssueArgs } from './args/FindManyLinearIssueArgs';
import { FindUniqueLinearIssueArgs } from './args/FindUniqueLinearIssueArgs';
import { GroupByLinearIssueArgs } from './args/GroupByLinearIssueArgs';
import { UpdateLinearIssueArgs } from './args/UpdateLinearIssueArgs';
import { UpdateManyLinearIssueArgs } from './args/UpdateManyLinearIssueArgs';
import { UpsertLinearIssueArgs } from './args/UpsertLinearIssueArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { LinearIssue } from '../../../models/LinearIssue';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateLinearIssue } from '../../outputs/AggregateLinearIssue';
import { LinearIssueGroupBy } from '../../outputs/LinearIssueGroupBy';

@TypeGraphQL.Resolver(_of => LinearIssue)
export class LinearIssueCrudResolver {
  @TypeGraphQL.Query(_returns => LinearIssue, {
    nullable: true,
  })
  async linearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueLinearIssueArgs,
  ): Promise<LinearIssue | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LinearIssue, {
    nullable: true,
  })
  async findFirstLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstLinearIssueArgs,
  ): Promise<LinearIssue | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LinearIssue], {
    nullable: false,
  })
  async linearIssues(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyLinearIssueArgs,
  ): Promise<LinearIssue[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearIssue, {
    nullable: false,
  })
  async createLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateLinearIssueArgs,
  ): Promise<LinearIssue> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyLinearIssueArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearIssue, {
    nullable: true,
  })
  async deleteLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteLinearIssueArgs,
  ): Promise<LinearIssue | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearIssue, {
    nullable: true,
  })
  async updateLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateLinearIssueArgs,
  ): Promise<LinearIssue | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyLinearIssueArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyLinearIssueArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LinearIssue, {
    nullable: false,
  })
  async upsertLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertLinearIssueArgs,
  ): Promise<LinearIssue> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateLinearIssue, {
    nullable: false,
  })
  async aggregateLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateLinearIssueArgs,
  ): Promise<AggregateLinearIssue> {
    return getPrismaFromContext(ctx).linearIssue.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [LinearIssueGroupBy], {
    nullable: false,
  })
  async groupByLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByLinearIssueArgs,
  ): Promise<LinearIssueGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).linearIssue.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
