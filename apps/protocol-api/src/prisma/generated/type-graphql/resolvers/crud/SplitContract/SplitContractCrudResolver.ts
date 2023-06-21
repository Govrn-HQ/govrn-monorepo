import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSplitContractArgs } from "./args/AggregateSplitContractArgs";
import { CreateManySplitContractArgs } from "./args/CreateManySplitContractArgs";
import { CreateOneSplitContractArgs } from "./args/CreateOneSplitContractArgs";
import { DeleteManySplitContractArgs } from "./args/DeleteManySplitContractArgs";
import { DeleteOneSplitContractArgs } from "./args/DeleteOneSplitContractArgs";
import { FindFirstSplitContractArgs } from "./args/FindFirstSplitContractArgs";
import { FindFirstSplitContractOrThrowArgs } from "./args/FindFirstSplitContractOrThrowArgs";
import { FindManySplitContractArgs } from "./args/FindManySplitContractArgs";
import { FindUniqueSplitContractArgs } from "./args/FindUniqueSplitContractArgs";
import { FindUniqueSplitContractOrThrowArgs } from "./args/FindUniqueSplitContractOrThrowArgs";
import { GroupBySplitContractArgs } from "./args/GroupBySplitContractArgs";
import { UpdateManySplitContractArgs } from "./args/UpdateManySplitContractArgs";
import { UpdateOneSplitContractArgs } from "./args/UpdateOneSplitContractArgs";
import { UpsertOneSplitContractArgs } from "./args/UpsertOneSplitContractArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SplitContract } from "../../../models/SplitContract";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSplitContract } from "../../outputs/AggregateSplitContract";
import { SplitContractGroupBy } from "../../outputs/SplitContractGroupBy";

@TypeGraphQL.Resolver(_of => SplitContract)
export class SplitContractCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSplitContract, {
    nullable: false
  })
  async aggregateSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSplitContractArgs): Promise<AggregateSplitContract> {
    return getPrismaFromContext(ctx).splitContract.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySplitContractArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SplitContract, {
    nullable: false
  })
  async createOneSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSplitContractArgs): Promise<SplitContract> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySplitContractArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SplitContract, {
    nullable: true
  })
  async deleteOneSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSplitContractArgs): Promise<SplitContract | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SplitContract, {
    nullable: true
  })
  async findFirstSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSplitContractArgs): Promise<SplitContract | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SplitContract, {
    nullable: true
  })
  async findFirstSplitContractOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSplitContractOrThrowArgs): Promise<SplitContract | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SplitContract], {
    nullable: false
  })
  async splitContracts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySplitContractArgs): Promise<SplitContract[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SplitContract, {
    nullable: true
  })
  async splitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSplitContractArgs): Promise<SplitContract | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SplitContract, {
    nullable: true
  })
  async getSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSplitContractOrThrowArgs): Promise<SplitContract | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SplitContractGroupBy], {
    nullable: false
  })
  async groupBySplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySplitContractArgs): Promise<SplitContractGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySplitContractArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SplitContract, {
    nullable: true
  })
  async updateOneSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSplitContractArgs): Promise<SplitContract | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SplitContract, {
    nullable: false
  })
  async upsertOneSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSplitContractArgs): Promise<SplitContract> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
