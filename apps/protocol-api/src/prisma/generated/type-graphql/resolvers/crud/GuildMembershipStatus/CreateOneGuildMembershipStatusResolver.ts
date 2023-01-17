import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneGuildMembershipStatusArgs } from "./args/CreateOneGuildMembershipStatusArgs";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class CreateOneGuildMembershipStatusResolver {
  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: false
  })
  async createOneGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGuildMembershipStatusArgs): Promise<GuildMembershipStatus> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
