import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertLinearJobRunArgs } from "./args/UpsertLinearJobRunArgs";
import { LinearJobRun } from "../../../models/LinearJobRun";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearJobRun)
export class UpsertLinearJobRunResolver {
  @TypeGraphQL.Mutation(_returns => LinearJobRun, {
    nullable: false
  })
  async upsertLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertLinearJobRunArgs): Promise<LinearJobRun> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
