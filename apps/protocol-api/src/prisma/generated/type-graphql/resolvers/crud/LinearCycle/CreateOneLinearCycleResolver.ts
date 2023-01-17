import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneLinearCycleArgs } from "./args/CreateOneLinearCycleArgs";
import { LinearCycle } from "../../../models/LinearCycle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearCycle)
export class CreateOneLinearCycleResolver {
  @TypeGraphQL.Mutation(_returns => LinearCycle, {
    nullable: false
  })
  async createOneLinearCycle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneLinearCycleArgs): Promise<LinearCycle> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearCycle.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
