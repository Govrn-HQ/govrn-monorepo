import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindManySplitContractArgs } from "./args/FindManySplitContractArgs";
import { SplitContract } from "../../../models/SplitContract";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitContract)
export class FindManySplitContractResolver {
  @TypeGraphQL.Query(_returns => [SplitContract], {
    nullable: false
  })
  async splitContracts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySplitContractArgs): Promise<SplitContract[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
