import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTwitterAccountArgs } from "./args/DeleteOneTwitterAccountArgs";
import { TwitterAccount } from "../../../models/TwitterAccount";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class DeleteOneTwitterAccountResolver {
  @TypeGraphQL.Mutation(_returns => TwitterAccount, {
    nullable: true
  })
  async deleteOneTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTwitterAccountArgs): Promise<TwitterAccount | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
