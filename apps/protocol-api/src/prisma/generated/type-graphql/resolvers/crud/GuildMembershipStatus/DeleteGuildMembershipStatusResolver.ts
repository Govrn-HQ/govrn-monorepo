import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteGuildMembershipStatusArgs } from "./args/DeleteGuildMembershipStatusArgs";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class DeleteGuildMembershipStatusResolver {
  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async deleteGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
