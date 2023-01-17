import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGuildImportArgs } from "./args/AggregateGuildImportArgs";
import { GuildImport } from "../../../models/GuildImport";
import { AggregateGuildImport } from "../../outputs/AggregateGuildImport";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImport)
export class AggregateGuildImportResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildImport, {
    nullable: false
  })
  async aggregateGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildImportArgs): Promise<AggregateGuildImport> {
    return getPrismaFromContext(ctx).guildImport.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
