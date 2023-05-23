import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildTwitterIntegrationArgs } from "./args/FindFirstGuildTwitterIntegrationArgs";
import { GuildTwitterIntegration } from "../../../models/GuildTwitterIntegration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildTwitterIntegration)
export class FindFirstGuildTwitterIntegrationResolver {
  @TypeGraphQL.Query(_returns => GuildTwitterIntegration, {
    nullable: true
  })
  async findFirstGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
