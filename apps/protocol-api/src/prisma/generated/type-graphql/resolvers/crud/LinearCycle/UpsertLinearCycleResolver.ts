import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertLinearCycleArgs } from "./args/UpsertLinearCycleArgs";
import { LinearCycle } from "../../../models/LinearCycle";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearCycle)
export class UpsertLinearCycleResolver {
  @TypeGraphQL.Mutation(_returns => LinearCycle, {
    nullable: false
  })
  async upsertLinearCycle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertLinearCycleArgs): Promise<LinearCycle> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearCycle.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
