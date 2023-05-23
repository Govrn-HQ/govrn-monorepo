import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGuildTwitterIntegrationArgs } from "./args/UpdateOneGuildTwitterIntegrationArgs";
import { GuildTwitterIntegration } from "../../../models/GuildTwitterIntegration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildTwitterIntegration)
export class UpdateOneGuildTwitterIntegrationResolver {
  @TypeGraphQL.Mutation(_returns => GuildTwitterIntegration, {
    nullable: true
  })
  async updateOneGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
