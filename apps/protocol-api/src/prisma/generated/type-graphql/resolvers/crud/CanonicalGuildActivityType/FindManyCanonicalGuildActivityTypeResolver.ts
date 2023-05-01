import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCanonicalGuildActivityTypeArgs } from "./args/FindManyCanonicalGuildActivityTypeArgs";
import { CanonicalGuildActivityType } from "../../../models/CanonicalGuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CanonicalGuildActivityType)
export class FindManyCanonicalGuildActivityTypeResolver {
  @TypeGraphQL.Query(_returns => [CanonicalGuildActivityType], {
    nullable: false
  })
  async canonicalGuildActivityTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
