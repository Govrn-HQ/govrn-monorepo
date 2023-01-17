import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTwitterAccountArgs } from "./args/FindFirstTwitterAccountArgs";
import { TwitterAccount } from "../../../models/TwitterAccount";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class FindFirstTwitterAccountResolver {
  @TypeGraphQL.Query(_returns => TwitterAccount, {
    nullable: true
  })
  async findFirstTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterAccountArgs): Promise<TwitterAccount | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
