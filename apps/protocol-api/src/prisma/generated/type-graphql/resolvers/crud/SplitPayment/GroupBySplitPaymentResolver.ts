import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySplitPaymentArgs } from "./args/GroupBySplitPaymentArgs";
import { SplitPayment } from "../../../models/SplitPayment";
import { SplitPaymentGroupBy } from "../../outputs/SplitPaymentGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitPayment)
export class GroupBySplitPaymentResolver {
  @TypeGraphQL.Query(_returns => [SplitPaymentGroupBy], {
    nullable: false
  })
  async groupBySplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySplitPaymentArgs): Promise<SplitPaymentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
