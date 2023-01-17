import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTwitterAccountArgs } from "./args/UpdateOneTwitterAccountArgs";
import { TwitterAccount } from "../../../models/TwitterAccount";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class UpdateOneTwitterAccountResolver {
  @TypeGraphQL.Mutation(_returns => TwitterAccount, {
    nullable: true
  })
  async updateOneTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTwitterAccountArgs): Promise<TwitterAccount | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
