import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteGuildUserArgs } from "./args/DeleteGuildUserArgs";
import { GuildUser } from "../../../models/GuildUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildUser)
export class DeleteGuildUserResolver {
  @TypeGraphQL.Mutation(_returns => GuildUser, {
    nullable: true
  })
  async deleteGuildUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteGuildUserArgs): Promise<GuildUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
