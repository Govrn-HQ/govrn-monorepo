import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildImportStatusArgs } from "./args/AggregateGuildImportStatusArgs";
import { GuildImportStatus } from "../../../models/GuildImportStatus";
import { AggregateGuildImportStatus } from "../../outputs/AggregateGuildImportStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImportStatus)
export class AggregateGuildImportStatusResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildImportStatus, {
    nullable: false
  })
  async aggregateGuildImportStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildImportStatusArgs): Promise<AggregateGuildImportStatus> {
    return getPrismaFromContext(ctx).guildImportStatus.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
