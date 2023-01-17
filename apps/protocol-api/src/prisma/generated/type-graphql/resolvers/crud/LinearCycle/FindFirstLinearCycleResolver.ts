import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLinearCycleArgs } from "./args/FindFirstLinearCycleArgs";
import { LinearCycle } from "../../../models/LinearCycle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearCycle)
export class FindFirstLinearCycleResolver {
  @TypeGraphQL.Query(_returns => LinearCycle, {
    nullable: true
  })
  async findFirstLinearCycle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLinearCycleArgs): Promise<LinearCycle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearCycle.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
