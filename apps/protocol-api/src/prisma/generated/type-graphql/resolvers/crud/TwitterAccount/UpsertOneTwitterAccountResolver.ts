import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTwitterAccountArgs } from "./args/UpsertOneTwitterAccountArgs";
import { TwitterAccount } from "../../../models/TwitterAccount";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class UpsertOneTwitterAccountResolver {
  @TypeGraphQL.Mutation(_returns => TwitterAccount, {
    nullable: false
  })
  async upsertOneTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTwitterAccountArgs): Promise<TwitterAccount> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
