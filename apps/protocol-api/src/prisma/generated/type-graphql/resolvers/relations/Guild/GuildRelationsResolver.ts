import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { GuildContribution } from "../../../models/GuildContribution";
import { GuildUser } from "../../../models/GuildUser";
import { GuildContributionsArgs } from "./args/GuildContributionsArgs";
import { GuildUsersArgs } from "./args/GuildUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Guild)
export class GuildRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [GuildContribution], {
    nullable: false
  })
  async contributions(@TypeGraphQL.Root() guild: Guild, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildContributionsArgs): Promise<GuildContribution[]> {
    return getPrismaFromContext(ctx).guild.findUnique({
      where: {
        id: guild.id,
      },
    }).contributions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [GuildUser], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() guild: Guild, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildUsersArgs): Promise<GuildUser[]> {
    return getPrismaFromContext(ctx).guild.findUnique({
      where: {
        id: guild.id,
      },
    }).users(args);
  }
}
