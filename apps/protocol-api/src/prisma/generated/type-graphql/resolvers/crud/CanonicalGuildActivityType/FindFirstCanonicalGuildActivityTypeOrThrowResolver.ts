import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCanonicalGuildActivityTypeOrThrowArgs } from "./args/FindFirstCanonicalGuildActivityTypeOrThrowArgs";
import { CanonicalGuildActivityType } from "../../../models/CanonicalGuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CanonicalGuildActivityType)
export class FindFirstCanonicalGuildActivityTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => CanonicalGuildActivityType, {
    nullable: true
  })
  async findFirstCanonicalGuildActivityTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCanonicalGuildActivityTypeOrThrowArgs): Promise<CanonicalGuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
