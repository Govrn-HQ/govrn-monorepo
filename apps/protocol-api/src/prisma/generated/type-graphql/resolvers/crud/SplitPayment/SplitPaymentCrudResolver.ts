import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSplitPaymentArgs } from "./args/AggregateSplitPaymentArgs";
import { CreateManySplitPaymentArgs } from "./args/CreateManySplitPaymentArgs";
import { CreateOneSplitPaymentArgs } from "./args/CreateOneSplitPaymentArgs";
import { DeleteManySplitPaymentArgs } from "./args/DeleteManySplitPaymentArgs";
import { DeleteOneSplitPaymentArgs } from "./args/DeleteOneSplitPaymentArgs";
import { FindFirstSplitPaymentArgs } from "./args/FindFirstSplitPaymentArgs";
import { FindFirstSplitPaymentOrThrowArgs } from "./args/FindFirstSplitPaymentOrThrowArgs";
import { FindManySplitPaymentArgs } from "./args/FindManySplitPaymentArgs";
import { FindUniqueSplitPaymentArgs } from "./args/FindUniqueSplitPaymentArgs";
import { FindUniqueSplitPaymentOrThrowArgs } from "./args/FindUniqueSplitPaymentOrThrowArgs";
import { GroupBySplitPaymentArgs } from "./args/GroupBySplitPaymentArgs";
import { UpdateManySplitPaymentArgs } from "./args/UpdateManySplitPaymentArgs";
import { UpdateOneSplitPaymentArgs } from "./args/UpdateOneSplitPaymentArgs";
import { UpsertOneSplitPaymentArgs } from "./args/UpsertOneSplitPaymentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SplitPayment } from "../../../models/SplitPayment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSplitPayment } from "../../outputs/AggregateSplitPayment";
import { SplitPaymentGroupBy } from "../../outputs/SplitPaymentGroupBy";

@TypeGraphQL.Resolver(_of => SplitPayment)
export class SplitPaymentCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSplitPayment, {
    nullable: false
  })
  async aggregateSplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSplitPaymentArgs): Promise<AggregateSplitPayment> {
    return getPrismaFromContext(ctx).splitPayment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySplitPaymentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SplitPayment, {
    nullable: false
  })
  async createOneSplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSplitPaymentArgs): Promise<SplitPayment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySplitPaymentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SplitPayment, {
    nullable: true
  })
  async deleteOneSplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSplitPaymentArgs): Promise<SplitPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SplitPayment, {
    nullable: true
  })
  async findFirstSplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSplitPaymentArgs): Promise<SplitPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SplitPayment, {
    nullable: true
  })
  async findFirstSplitPaymentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSplitPaymentOrThrowArgs): Promise<SplitPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SplitPayment], {
    nullable: false
  })
  async splitPayments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySplitPaymentArgs): Promise<SplitPayment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SplitPayment, {
    nullable: true
  })
  async splitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSplitPaymentArgs): Promise<SplitPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SplitPayment, {
    nullable: true
  })
  async getSplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSplitPaymentOrThrowArgs): Promise<SplitPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SplitPaymentGroupBy], {
    nullable: false
  })
  async groupBySplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySplitPaymentArgs): Promise<SplitPaymentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySplitPaymentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SplitPayment, {
    nullable: true
  })
  async updateOneSplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSplitPaymentArgs): Promise<SplitPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SplitPayment, {
    nullable: false
  })
  async upsertOneSplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSplitPaymentArgs): Promise<SplitPayment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
