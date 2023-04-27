import * as TypeGraphQL from "type-graphql";
import { CanonicalGuildActivityType } from "../../../models/CanonicalGuildActivityType";
import { Guild } from "../../../models/Guild";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CanonicalGuildActivityType)
export class CanonicalGuildActivityTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: false
  })
  async guild(@TypeGraphQL.Root() canonicalGuildActivityType: CanonicalGuildActivityType, @TypeGraphQL.Ctx() ctx: any): Promise<Guild> {
    return getPrismaFromContext(ctx).canonicalGuildActivityType.findUnique({
      where: {
        id: canonicalGuildActivityType.id,
      },
    }).guild({});
  }

  @TypeGraphQL.FieldResolver(_type => GuildActivityType, {
    nullable: false
  })
  async guild_activity_type(@TypeGraphQL.Root() canonicalGuildActivityType: CanonicalGuildActivityType, @TypeGraphQL.Ctx() ctx: any): Promise<GuildActivityType> {
    return getPrismaFromContext(ctx).canonicalGuildActivityType.findUnique({
      where: {
        id: canonicalGuildActivityType.id,
      },
    }).guild_activity_type({});
  }
}
