import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationSettingArgs } from "./args/AggregateVerificationSettingArgs";
import { CreateManyVerificationSettingArgs } from "./args/CreateManyVerificationSettingArgs";
import { CreateOneVerificationSettingArgs } from "./args/CreateOneVerificationSettingArgs";
import { DeleteManyVerificationSettingArgs } from "./args/DeleteManyVerificationSettingArgs";
import { DeleteOneVerificationSettingArgs } from "./args/DeleteOneVerificationSettingArgs";
import { FindFirstVerificationSettingArgs } from "./args/FindFirstVerificationSettingArgs";
import { FindFirstVerificationSettingOrThrowArgs } from "./args/FindFirstVerificationSettingOrThrowArgs";
import { FindManyVerificationSettingArgs } from "./args/FindManyVerificationSettingArgs";
import { FindUniqueVerificationSettingArgs } from "./args/FindUniqueVerificationSettingArgs";
import { FindUniqueVerificationSettingOrThrowArgs } from "./args/FindUniqueVerificationSettingOrThrowArgs";
import { GroupByVerificationSettingArgs } from "./args/GroupByVerificationSettingArgs";
import { UpdateManyVerificationSettingArgs } from "./args/UpdateManyVerificationSettingArgs";
import { UpdateOneVerificationSettingArgs } from "./args/UpdateOneVerificationSettingArgs";
import { UpsertOneVerificationSettingArgs } from "./args/UpsertOneVerificationSettingArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VerificationSetting } from "../../../models/VerificationSetting";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVerificationSetting } from "../../outputs/AggregateVerificationSetting";
import { VerificationSettingGroupBy } from "../../outputs/VerificationSettingGroupBy";

@TypeGraphQL.Resolver(_of => VerificationSetting)
export class VerificationSettingCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVerificationSetting, {
    nullable: false
  })
  async aggregateVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVerificationSettingArgs): Promise<AggregateVerificationSetting> {
    return getPrismaFromContext(ctx).verificationSetting.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyVerificationSettingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VerificationSetting, {
    nullable: false
  })
  async createOneVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneVerificationSettingArgs): Promise<VerificationSetting> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyVerificationSettingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VerificationSetting, {
    nullable: true
  })
  async deleteOneVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneVerificationSettingArgs): Promise<VerificationSetting | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VerificationSetting, {
    nullable: true
  })
  async findFirstVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVerificationSettingArgs): Promise<VerificationSetting | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VerificationSetting, {
    nullable: true
  })
  async findFirstVerificationSettingOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVerificationSettingOrThrowArgs): Promise<VerificationSetting | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VerificationSetting], {
    nullable: false
  })
  async verificationSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVerificationSettingArgs): Promise<VerificationSetting[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VerificationSetting, {
    nullable: true
  })
  async verificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVerificationSettingArgs): Promise<VerificationSetting | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VerificationSetting, {
    nullable: true
  })
  async getVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVerificationSettingOrThrowArgs): Promise<VerificationSetting | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VerificationSettingGroupBy], {
    nullable: false
  })
  async groupByVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVerificationSettingArgs): Promise<VerificationSettingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyVerificationSettingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VerificationSetting, {
    nullable: true
  })
  async updateOneVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneVerificationSettingArgs): Promise<VerificationSetting | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VerificationSetting, {
    nullable: false
  })
  async upsertOneVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneVerificationSettingArgs): Promise<VerificationSetting> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
