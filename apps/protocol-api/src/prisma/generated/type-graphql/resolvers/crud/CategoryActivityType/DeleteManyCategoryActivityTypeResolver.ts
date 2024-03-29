import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCategoryActivityTypeArgs } from "./args/DeleteManyCategoryActivityTypeArgs";
import { CategoryActivityType } from "../../../models/CategoryActivityType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivityType)
export class DeleteManyCategoryActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCategoryActivityTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
