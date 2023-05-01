import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCanonicalGuildActivityTypeArgs } from "./args/DeleteOneCanonicalGuildActivityTypeArgs";
import { CanonicalGuildActivityType } from "../../../models/CanonicalGuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CanonicalGuildActivityType)
export class DeleteOneCanonicalGuildActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => CanonicalGuildActivityType, {
    nullable: true
  })
  async deleteOneCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
