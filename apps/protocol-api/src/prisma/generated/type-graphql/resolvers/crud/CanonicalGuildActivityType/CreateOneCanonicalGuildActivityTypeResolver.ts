import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneCanonicalGuildActivityTypeArgs } from "./args/CreateOneCanonicalGuildActivityTypeArgs";
import { CanonicalGuildActivityType } from "../../../models/CanonicalGuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CanonicalGuildActivityType)
export class CreateOneCanonicalGuildActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => CanonicalGuildActivityType, {
    nullable: false
  })
  async createOneCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
