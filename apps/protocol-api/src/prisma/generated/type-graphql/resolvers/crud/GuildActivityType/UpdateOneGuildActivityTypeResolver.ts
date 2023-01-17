import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneGuildActivityTypeArgs } from "./args/UpdateOneGuildActivityTypeArgs";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildActivityType)
export class UpdateOneGuildActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => GuildActivityType, {
    nullable: true
  })
  async updateOneGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuildActivityTypeArgs): Promise<GuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildActivityType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
