import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDiscordUserArgs } from "./args/AggregateDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";
import { AggregateDiscordUser } from "../../outputs/AggregateDiscordUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class AggregateDiscordUserResolver {
  @TypeGraphQL.Query(_returns => AggregateDiscordUser, {
    nullable: false
  })
  async aggregateDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDiscordUserArgs): Promise<AggregateDiscordUser> {
    return getPrismaFromContext(ctx).discordUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
