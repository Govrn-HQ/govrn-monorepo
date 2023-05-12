import * as TypeGraphQL from "type-graphql";
import { ActivityType } from "../../../models/ActivityType";
import { CanonicalGuildActivityType } from "../../../models/CanonicalGuildActivityType";
import { Guild } from "../../../models/Guild";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

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

  @TypeGraphQL.FieldResolver(_type => ActivityType, {
    nullable: true
  })
  async migrated_from(@TypeGraphQL.Root() guildActivityType: GuildActivityType, @TypeGraphQL.Ctx() ctx: any): Promise<ActivityType | null> {
    return getPrismaFromContext(ctx).guildActivityType.findUnique({
      where: {
        id: guildActivityType.id,
      },
    }).migrated_from({});
  }

  @TypeGraphQL.FieldResolver(_type => CanonicalGuildActivityType, {
    nullable: true
  })
  async CanonicalGuildActivityType(@TypeGraphQL.Root() guildActivityType: GuildActivityType, @TypeGraphQL.Ctx() ctx: any): Promise<CanonicalGuildActivityType | null> {
    return getPrismaFromContext(ctx).guildActivityType.findUnique({
      where: {
        id: guildActivityType.id,
      },
    }).CanonicalGuildActivityType({});
  }
}
