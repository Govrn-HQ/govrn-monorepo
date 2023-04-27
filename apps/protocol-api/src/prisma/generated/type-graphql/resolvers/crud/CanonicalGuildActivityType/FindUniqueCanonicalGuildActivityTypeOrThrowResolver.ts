import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCanonicalGuildActivityTypeOrThrowArgs } from "./args/FindUniqueCanonicalGuildActivityTypeOrThrowArgs";
import { CanonicalGuildActivityType } from "../../../models/CanonicalGuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CanonicalGuildActivityType)
export class FindUniqueCanonicalGuildActivityTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => CanonicalGuildActivityType, {
    nullable: true
  })
  async getCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCanonicalGuildActivityTypeOrThrowArgs): Promise<CanonicalGuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
