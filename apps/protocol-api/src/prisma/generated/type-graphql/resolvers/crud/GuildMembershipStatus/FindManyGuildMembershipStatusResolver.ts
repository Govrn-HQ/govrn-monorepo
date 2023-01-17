import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyGuildMembershipStatusArgs } from "./args/FindManyGuildMembershipStatusArgs";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class FindManyGuildMembershipStatusResolver {
  @TypeGraphQL.Query(_returns => [GuildMembershipStatus], {
    nullable: false
  })
  async guildMembershipStatuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildMembershipStatusArgs): Promise<GuildMembershipStatus[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
