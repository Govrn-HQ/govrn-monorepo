import * as TypeGraphQL from "type-graphql";
import { ActivityType } from "../../../models/ActivityType";
import { Guild } from "../../../models/Guild";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildActivityType)
export class GuildActivityTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: false
  })
  async guild(@TypeGraphQL.Root() guildActivityType: GuildActivityType, @TypeGraphQL.Ctx() ctx: any): Promise<Guild> {
    return getPrismaFromContext(ctx).guildActivityType.findUnique({
      where: {
        id: guildActivityType.id,
      },
    }).guild({});
  }

  @TypeGraphQL.FieldResolver(_type => ActivityType, {
    nullable: false
  })
  async activity_type(@TypeGraphQL.Root() guildActivityType: GuildActivityType, @TypeGraphQL.Ctx() ctx: any): Promise<ActivityType> {
    return getPrismaFromContext(ctx).guildActivityType.findUnique({
      where: {
        id: guildActivityType.id,
      },
    }).activity_type({});
  }
}
