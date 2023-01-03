import * as TypeGraphQL from "type-graphql";
import { GuildImport } from "../../../models/GuildImport";
import { IntegrationType } from "../../../models/IntegrationType";
import { IntegrationTypeGuild_importsArgs } from "./args/IntegrationTypeGuild_importsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationType)
export class IntegrationTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [GuildImport], {
    nullable: false
  })
  async guild_imports(@TypeGraphQL.Root() integrationType: IntegrationType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: IntegrationTypeGuild_importsArgs): Promise<GuildImport[]> {
    return getPrismaFromContext(ctx).integrationType.findUnique({
      where: {
        id: integrationType.id,
      },
    }).guild_imports(args);
  }
}
