import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneLinearUserArgs } from "./args/CreateOneLinearUserArgs";
import { LinearUser } from "../../../models/LinearUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearUser)
export class CreateOneLinearUserResolver {
  @TypeGraphQL.Mutation(_returns => LinearUser, {
    nullable: false
  })
  async createOneLinearUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneLinearUserArgs): Promise<LinearUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
