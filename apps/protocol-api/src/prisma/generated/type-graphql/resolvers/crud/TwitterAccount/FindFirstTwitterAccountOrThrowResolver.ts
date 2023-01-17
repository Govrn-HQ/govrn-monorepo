import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTwitterAccountOrThrowArgs } from "./args/FindFirstTwitterAccountOrThrowArgs";
import { TwitterAccount } from "../../../models/TwitterAccount";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class FindFirstTwitterAccountOrThrowResolver {
  @TypeGraphQL.Query(_returns => TwitterAccount, {
    nullable: true
  })
  async findFirstTwitterAccountOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterAccountOrThrowArgs): Promise<TwitterAccount | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
