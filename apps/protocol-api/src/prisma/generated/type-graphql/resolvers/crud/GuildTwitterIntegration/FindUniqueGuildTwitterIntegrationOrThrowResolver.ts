import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueGuildTwitterIntegrationOrThrowArgs } from "./args/FindUniqueGuildTwitterIntegrationOrThrowArgs";
import { GuildTwitterIntegration } from "../../../models/GuildTwitterIntegration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildTwitterIntegration)
export class FindUniqueGuildTwitterIntegrationOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildTwitterIntegration, {
    nullable: true
  })
  async getGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildTwitterIntegrationOrThrowArgs): Promise<GuildTwitterIntegration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
