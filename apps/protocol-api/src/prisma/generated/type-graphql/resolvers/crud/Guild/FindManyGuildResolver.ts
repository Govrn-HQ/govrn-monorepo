import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindManyGuildArgs } from "./args/FindManyGuildArgs";
import { Guild } from "../../../models/Guild";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Guild)
export class FindManyGuildResolver {
  @TypeGraphQL.Query(_returns => [Guild], {
    nullable: false
  })
  async guilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildArgs): Promise<Guild[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guild.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
