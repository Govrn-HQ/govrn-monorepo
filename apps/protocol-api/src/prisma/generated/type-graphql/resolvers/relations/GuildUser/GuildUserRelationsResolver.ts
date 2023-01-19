import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { GuildImport } from "../../../models/GuildImport";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { GuildUser } from "../../../models/GuildUser";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildUser)
export class GuildUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() guildUser: GuildUser, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).guildUser.findUnique({
      where: {
        id: guildUser.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: false
  })
  async guild(@TypeGraphQL.Root() guildUser: GuildUser, @TypeGraphQL.Ctx() ctx: any): Promise<Guild> {
    return getPrismaFromContext(ctx).guildUser.findUnique({
      where: {
        id: guildUser.id,
      },
    }).guild({});
  }

  @TypeGraphQL.FieldResolver(_type => GuildMembershipStatus, {
    nullable: true
  })
  async membership_status(@TypeGraphQL.Root() guildUser: GuildUser, @TypeGraphQL.Ctx() ctx: any): Promise<GuildMembershipStatus | null> {
    return getPrismaFromContext(ctx).guildUser.findUnique({
      where: {
        id: guildUser.id,
      },
    }).membership_status({});
  }

  @TypeGraphQL.FieldResolver(_type => GuildImport, {
    nullable: true
  })
  async guild_import(@TypeGraphQL.Root() guildUser: GuildUser, @TypeGraphQL.Ctx() ctx: any): Promise<GuildImport | null> {
    return getPrismaFromContext(ctx).guildUser.findUnique({
      where: {
        id: guildUser.id,
      },
    }).guild_import({});
  }
}
