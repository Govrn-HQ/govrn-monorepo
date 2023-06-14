import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { GuildTwitterIntegration } from "../../../models/GuildTwitterIntegration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildTwitterIntegration)
export class GuildTwitterIntegrationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: false
  })
  async guild(@TypeGraphQL.Root() guildTwitterIntegration: GuildTwitterIntegration, @TypeGraphQL.Ctx() ctx: any): Promise<Guild> {
    return getPrismaFromContext(ctx).guildTwitterIntegration.findUnique({
      where: {
        id: guildTwitterIntegration.id,
      },
    }).guild({});
  }
}
