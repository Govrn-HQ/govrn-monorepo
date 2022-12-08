import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { GuildVerificationStatus } from "../../../models/GuildVerificationStatus";
import { GuildVerificationStatusGuildArgs } from "./args/GuildVerificationStatusGuildArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildVerificationStatus)
export class GuildVerificationStatusRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Guild], {
    nullable: false
  })
  async Guild(@TypeGraphQL.Root() guildVerificationStatus: GuildVerificationStatus, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildVerificationStatusGuildArgs): Promise<Guild[]> {
    return getPrismaFromContext(ctx).guildVerificationStatus.findUnique({
      where: {
        id: guildVerificationStatus.id,
      },
    }).Guild(args);
  }
}
