import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstContributionOrThrowArgs } from "./args/FindFirstContributionOrThrowArgs";
import { Contribution } from "../../../models/Contribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Contribution)
export class FindFirstContributionOrThrowResolver {
  @TypeGraphQL.Query(_returns => Contribution, {
    nullable: true
  })
  async findFirstContributionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContributionOrThrowArgs): Promise<Contribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contribution.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
