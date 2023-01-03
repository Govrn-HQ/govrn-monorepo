import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { GuildImport } from "../../../models/GuildImport";
import { IntegrationType } from "../../../models/IntegrationType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImport)
export class GuildImportRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: false
  })
  async guild(@TypeGraphQL.Root() guildImport: GuildImport, @TypeGraphQL.Ctx() ctx: any): Promise<Guild> {
    return getPrismaFromContext(ctx).guildImport.findUnique({
      where: {
        id: guildImport.id,
      },
    }).guild({});
  }

  @TypeGraphQL.FieldResolver(_type => IntegrationType, {
    nullable: false
  })
  async integration_type(@TypeGraphQL.Root() guildImport: GuildImport, @TypeGraphQL.Ctx() ctx: any): Promise<IntegrationType> {
    return getPrismaFromContext(ctx).guildImport.findUnique({
      where: {
        id: guildImport.id,
      },
    }).integration_type({});
  }
}
