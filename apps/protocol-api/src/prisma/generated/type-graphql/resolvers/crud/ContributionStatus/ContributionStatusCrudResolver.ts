import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateContributionStatusArgs } from './args/AggregateContributionStatusArgs';
import { CreateContributionStatusArgs } from './args/CreateContributionStatusArgs';
import { CreateManyContributionStatusArgs } from './args/CreateManyContributionStatusArgs';
import { DeleteContributionStatusArgs } from './args/DeleteContributionStatusArgs';
import { DeleteManyContributionStatusArgs } from './args/DeleteManyContributionStatusArgs';
import { FindFirstContributionStatusArgs } from './args/FindFirstContributionStatusArgs';
import { FindManyContributionStatusArgs } from './args/FindManyContributionStatusArgs';
import { FindUniqueContributionStatusArgs } from './args/FindUniqueContributionStatusArgs';
import { GroupByContributionStatusArgs } from './args/GroupByContributionStatusArgs';
import { UpdateContributionStatusArgs } from './args/UpdateContributionStatusArgs';
import { UpdateManyContributionStatusArgs } from './args/UpdateManyContributionStatusArgs';
import { UpsertContributionStatusArgs } from './args/UpsertContributionStatusArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { ContributionStatus } from '../../../models/ContributionStatus';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateContributionStatus } from '../../outputs/AggregateContributionStatus';
import { ContributionStatusGroupBy } from '../../outputs/ContributionStatusGroupBy';

@TypeGraphQL.Resolver(_of => ContributionStatus)
export class ContributionStatusCrudResolver {
  @TypeGraphQL.Query(_returns => ContributionStatus, {
    nullable: true,
  })
  async contributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueContributionStatusArgs,
  ): Promise<ContributionStatus | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContributionStatus, {
    nullable: true,
  })
  async findFirstContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstContributionStatusArgs,
  ): Promise<ContributionStatus | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContributionStatus], {
    nullable: false,
  })
  async contributionStatuses(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyContributionStatusArgs,
  ): Promise<ContributionStatus[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ContributionStatus, {
    nullable: false,
  })
  async createContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateContributionStatusArgs,
  ): Promise<ContributionStatus> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyContributionStatusArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ContributionStatus, {
    nullable: true,
  })
  async deleteContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteContributionStatusArgs,
  ): Promise<ContributionStatus | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ContributionStatus, {
    nullable: true,
  })
  async updateContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateContributionStatusArgs,
  ): Promise<ContributionStatus | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyContributionStatusArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyContributionStatusArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ContributionStatus, {
    nullable: false,
  })
  async upsertContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertContributionStatusArgs,
  ): Promise<ContributionStatus> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateContributionStatus, {
    nullable: false,
  })
  async aggregateContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateContributionStatusArgs,
  ): Promise<AggregateContributionStatus> {
    return getPrismaFromContext(ctx).contributionStatus.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContributionStatusGroupBy], {
    nullable: false,
  })
  async groupByContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByContributionStatusArgs,
  ): Promise<ContributionStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).contributionStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
