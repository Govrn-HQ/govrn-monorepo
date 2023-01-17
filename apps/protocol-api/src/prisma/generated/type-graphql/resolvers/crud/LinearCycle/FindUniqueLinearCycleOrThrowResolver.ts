import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLinearCycleOrThrowArgs } from "./args/FindUniqueLinearCycleOrThrowArgs";
import { LinearCycle } from "../../../models/LinearCycle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearCycle)
export class FindUniqueLinearCycleOrThrowResolver {
  @TypeGraphQL.Query(_returns => LinearCycle, {
    nullable: true
  })
  async getLinearCycle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLinearCycleOrThrowArgs): Promise<LinearCycle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearCycle.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
