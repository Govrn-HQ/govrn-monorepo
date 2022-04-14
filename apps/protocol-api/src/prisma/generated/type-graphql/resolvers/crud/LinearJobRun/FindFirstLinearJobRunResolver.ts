import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstLinearJobRunArgs } from "./args/FindFirstLinearJobRunArgs";
import { LinearJobRun } from "../../../models/LinearJobRun";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearJobRun)
export class FindFirstLinearJobRunResolver {
  @TypeGraphQL.Query(_returns => LinearJobRun, {
    nullable: true
  })
  async findFirstLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLinearJobRunArgs): Promise<LinearJobRun | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
