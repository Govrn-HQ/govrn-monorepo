import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGuildImportArgs } from "./args/AggregateGuildImportArgs";
import { CreateManyGuildImportArgs } from "./args/CreateManyGuildImportArgs";
import { CreateOneGuildImportArgs } from "./args/CreateOneGuildImportArgs";
import { DeleteManyGuildImportArgs } from "./args/DeleteManyGuildImportArgs";
import { DeleteOneGuildImportArgs } from "./args/DeleteOneGuildImportArgs";
import { FindFirstGuildImportArgs } from "./args/FindFirstGuildImportArgs";
import { FindFirstGuildImportOrThrowArgs } from "./args/FindFirstGuildImportOrThrowArgs";
import { FindManyGuildImportArgs } from "./args/FindManyGuildImportArgs";
import { FindUniqueGuildImportArgs } from "./args/FindUniqueGuildImportArgs";
import { FindUniqueGuildImportOrThrowArgs } from "./args/FindUniqueGuildImportOrThrowArgs";
import { GroupByGuildImportArgs } from "./args/GroupByGuildImportArgs";
import { UpdateManyGuildImportArgs } from "./args/UpdateManyGuildImportArgs";
import { UpdateOneGuildImportArgs } from "./args/UpdateOneGuildImportArgs";
import { UpsertOneGuildImportArgs } from "./args/UpsertOneGuildImportArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GuildImport } from "../../../models/GuildImport";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGuildImport } from "../../outputs/AggregateGuildImport";
import { GuildImportGroupBy } from "../../outputs/GuildImportGroupBy";

@TypeGraphQL.Resolver(_of => GuildImport)
export class GuildImportCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildImport, {
    nullable: false
  })
  async aggregateGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildImportArgs): Promise<AggregateGuildImport> {
    return getPrismaFromContext(ctx).guildImport.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyGuildImportArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildImport, {
    nullable: false
  })
  async createOneGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGuildImportArgs): Promise<GuildImport> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyGuildImportArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildImport, {
    nullable: true
  })
  async deleteOneGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildImportArgs): Promise<GuildImport | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildImport, {
    nullable: true
  })
  async findFirstGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildImportArgs): Promise<GuildImport | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildImport, {
    nullable: true
  })
  async findFirstGuildImportOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildImportOrThrowArgs): Promise<GuildImport | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildImport], {
    nullable: false
  })
  async guildImports(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildImportArgs): Promise<GuildImport[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildImport, {
    nullable: true
  })
  async guildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildImportArgs): Promise<GuildImport | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildImport, {
    nullable: true
  })
  async getGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildImportOrThrowArgs): Promise<GuildImport | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildImportGroupBy], {
    nullable: false
  })
  async groupByGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildImportArgs): Promise<GuildImportGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyGuildImportArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildImport, {
    nullable: true
  })
  async updateOneGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuildImportArgs): Promise<GuildImport | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildImport, {
    nullable: false
  })
  async upsertOneGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGuildImportArgs): Promise<GuildImport> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
