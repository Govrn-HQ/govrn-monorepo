import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSplitPaymentOrThrowArgs } from "./args/FindUniqueSplitPaymentOrThrowArgs";
import { SplitPayment } from "../../../models/SplitPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitPayment)
export class FindUniqueSplitPaymentOrThrowResolver {
  @TypeGraphQL.Query(_returns => SplitPayment, {
    nullable: true
  })
  async getSplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSplitPaymentOrThrowArgs): Promise<SplitPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
