import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGuildArgs } from "./args/AggregateGuildArgs";
import { Guild } from "../../../models/Guild";
import { AggregateGuild } from "../../outputs/AggregateGuild";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Guild)
export class AggregateGuildResolver {
  @TypeGraphQL.Query(_returns => AggregateGuild, {
    nullable: false
  })
  async aggregateGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildArgs): Promise<AggregateGuild> {
    return getPrismaFromContext(ctx).guild.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
