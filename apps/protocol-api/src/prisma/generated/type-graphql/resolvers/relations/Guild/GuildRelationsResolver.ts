import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { GuildContribution } from "../../../models/GuildContribution";
import { GuildContributionsArgs } from "./args/GuildContributionsArgs";
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
}
