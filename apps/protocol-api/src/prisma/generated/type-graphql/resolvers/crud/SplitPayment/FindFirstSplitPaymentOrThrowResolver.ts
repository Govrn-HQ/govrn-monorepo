import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstSplitPaymentOrThrowArgs } from "./args/FindFirstSplitPaymentOrThrowArgs";
import { SplitPayment } from "../../../models/SplitPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitPayment)
export class FindFirstSplitPaymentOrThrowResolver {
  @TypeGraphQL.Query(_returns => SplitPayment, {
    nullable: true
  })
  async findFirstSplitPaymentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSplitPaymentOrThrowArgs): Promise<SplitPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
