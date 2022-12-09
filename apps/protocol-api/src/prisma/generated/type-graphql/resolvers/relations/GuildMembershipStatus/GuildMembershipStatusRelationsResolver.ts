import * as TypeGraphQL from "type-graphql";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { GuildUser } from "../../../models/GuildUser";
import { GuildMembershipStatusGuildUsersArgs } from "./args/GuildMembershipStatusGuildUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class GuildMembershipStatusRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [GuildUser], {
    nullable: false
  })
  async guildUsers(@TypeGraphQL.Root() guildMembershipStatus: GuildMembershipStatus, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildMembershipStatusGuildUsersArgs): Promise<GuildUser[]> {
    return getPrismaFromContext(ctx).guildMembershipStatus.findUnique({
      where: {
        id: guildMembershipStatus.id,
      },
    }).guildUsers(args);
  }
}
