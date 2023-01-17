import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneGuildActivityTypeArgs } from "./args/DeleteOneGuildActivityTypeArgs";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildActivityType)
export class DeleteOneGuildActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => GuildActivityType, {
    nullable: true
  })
  async deleteOneGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildActivityTypeArgs): Promise<GuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildActivityType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
