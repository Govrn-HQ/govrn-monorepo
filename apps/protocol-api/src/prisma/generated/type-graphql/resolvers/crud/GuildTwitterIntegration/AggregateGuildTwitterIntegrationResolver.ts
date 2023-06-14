import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildTwitterIntegrationArgs } from "./args/AggregateGuildTwitterIntegrationArgs";
import { GuildTwitterIntegration } from "../../../models/GuildTwitterIntegration";
import { AggregateGuildTwitterIntegration } from "../../outputs/AggregateGuildTwitterIntegration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildTwitterIntegration)
export class AggregateGuildTwitterIntegrationResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildTwitterIntegration, {
    nullable: false
  })
  async aggregateGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildTwitterIntegrationArgs): Promise<AggregateGuildTwitterIntegration> {
    return getPrismaFromContext(ctx).guildTwitterIntegration.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
