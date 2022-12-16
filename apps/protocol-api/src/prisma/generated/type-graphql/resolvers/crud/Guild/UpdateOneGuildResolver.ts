import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGuildArgs } from "./args/UpdateOneGuildArgs";
import { Guild } from "../../../models/Guild";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Guild)
export class UpdateOneGuildResolver {
  @TypeGraphQL.Mutation(_returns => Guild, {
    nullable: true
  })
  async updateOneGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuildArgs): Promise<Guild | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guild.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
