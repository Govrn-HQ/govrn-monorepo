import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneLinearCycleArgs } from "./args/UpdateOneLinearCycleArgs";
import { LinearCycle } from "../../../models/LinearCycle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearCycle)
export class UpdateOneLinearCycleResolver {
  @TypeGraphQL.Mutation(_returns => LinearCycle, {
    nullable: true
  })
  async updateOneLinearCycle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneLinearCycleArgs): Promise<LinearCycle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearCycle.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
