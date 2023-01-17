import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildOrThrowArgs } from "./args/FindFirstGuildOrThrowArgs";
import { Guild } from "../../../models/Guild";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Guild)
export class FindFirstGuildOrThrowResolver {
  @TypeGraphQL.Query(_returns => Guild, {
    nullable: true
  })
  async findFirstGuildOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildOrThrowArgs): Promise<Guild | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guild.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
