import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSplitContractArgs } from "./args/DeleteOneSplitContractArgs";
import { SplitContract } from "../../../models/SplitContract";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitContract)
export class DeleteOneSplitContractResolver {
  @TypeGraphQL.Mutation(_returns => SplitContract, {
    nullable: true
  })
  async deleteOneSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSplitContractArgs): Promise<SplitContract | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
