import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueGuildActivityTypeOrThrowArgs } from "./args/FindUniqueGuildActivityTypeOrThrowArgs";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildActivityType)
export class FindUniqueGuildActivityTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildActivityType, {
    nullable: true
  })
  async getGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildActivityTypeOrThrowArgs): Promise<GuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildActivityType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
