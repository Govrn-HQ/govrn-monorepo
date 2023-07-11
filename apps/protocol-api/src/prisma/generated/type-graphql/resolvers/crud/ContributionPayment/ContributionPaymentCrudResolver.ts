import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateContributionPaymentArgs } from "./args/AggregateContributionPaymentArgs";
import { CreateManyContributionPaymentArgs } from "./args/CreateManyContributionPaymentArgs";
import { CreateOneContributionPaymentArgs } from "./args/CreateOneContributionPaymentArgs";
import { DeleteManyContributionPaymentArgs } from "./args/DeleteManyContributionPaymentArgs";
import { DeleteOneContributionPaymentArgs } from "./args/DeleteOneContributionPaymentArgs";
import { FindFirstContributionPaymentArgs } from "./args/FindFirstContributionPaymentArgs";
import { FindFirstContributionPaymentOrThrowArgs } from "./args/FindFirstContributionPaymentOrThrowArgs";
import { FindManyContributionPaymentArgs } from "./args/FindManyContributionPaymentArgs";
import { FindUniqueContributionPaymentArgs } from "./args/FindUniqueContributionPaymentArgs";
import { FindUniqueContributionPaymentOrThrowArgs } from "./args/FindUniqueContributionPaymentOrThrowArgs";
import { GroupByContributionPaymentArgs } from "./args/GroupByContributionPaymentArgs";
import { UpdateManyContributionPaymentArgs } from "./args/UpdateManyContributionPaymentArgs";
import { UpdateOneContributionPaymentArgs } from "./args/UpdateOneContributionPaymentArgs";
import { UpsertOneContributionPaymentArgs } from "./args/UpsertOneContributionPaymentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ContributionPayment } from "../../../models/ContributionPayment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateContributionPayment } from "../../outputs/AggregateContributionPayment";
import { ContributionPaymentGroupBy } from "../../outputs/ContributionPaymentGroupBy";

@TypeGraphQL.Resolver(_of => ContributionPayment)
export class ContributionPaymentCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateContributionPayment, {
    nullable: false
  })
  async aggregateContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContributionPaymentArgs): Promise<AggregateContributionPayment> {
    return getPrismaFromContext(ctx).contributionPayment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyContributionPaymentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ContributionPayment, {
    nullable: false
  })
  async createOneContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneContributionPaymentArgs): Promise<ContributionPayment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyContributionPaymentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ContributionPayment, {
    nullable: true
  })
  async deleteOneContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneContributionPaymentArgs): Promise<ContributionPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContributionPayment, {
    nullable: true
  })
  async findFirstContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContributionPaymentArgs): Promise<ContributionPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContributionPayment, {
    nullable: true
  })
  async findFirstContributionPaymentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContributionPaymentOrThrowArgs): Promise<ContributionPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContributionPayment], {
    nullable: false
  })
  async contributionPayments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyContributionPaymentArgs): Promise<ContributionPayment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContributionPayment, {
    nullable: true
  })
  async contributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContributionPaymentArgs): Promise<ContributionPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContributionPayment, {
    nullable: true
  })
  async getContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContributionPaymentOrThrowArgs): Promise<ContributionPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContributionPaymentGroupBy], {
    nullable: false
  })
  async groupByContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByContributionPaymentArgs): Promise<ContributionPaymentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyContributionPaymentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ContributionPayment, {
    nullable: true
  })
  async updateOneContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneContributionPaymentArgs): Promise<ContributionPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ContributionPayment, {
    nullable: false
  })
  async upsertOneContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneContributionPaymentArgs): Promise<ContributionPayment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
