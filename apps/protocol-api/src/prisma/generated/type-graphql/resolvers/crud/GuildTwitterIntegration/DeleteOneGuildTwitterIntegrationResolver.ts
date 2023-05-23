import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneGuildTwitterIntegrationArgs } from "./args/DeleteOneGuildTwitterIntegrationArgs";
import { GuildTwitterIntegration } from "../../../models/GuildTwitterIntegration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildTwitterIntegration)
export class DeleteOneGuildTwitterIntegrationResolver {
  @TypeGraphQL.Mutation(_returns => GuildTwitterIntegration, {
    nullable: true
  })
  async deleteOneGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
