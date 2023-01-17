import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildActivityTypeOrThrowArgs } from "./args/FindFirstGuildActivityTypeOrThrowArgs";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildActivityType)
export class FindFirstGuildActivityTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildActivityType, {
    nullable: true
  })
  async findFirstGuildActivityTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildActivityTypeOrThrowArgs): Promise<GuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildActivityType.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
