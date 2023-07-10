import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSplitPaymentArgs } from "./args/AggregateSplitPaymentArgs";
import { SplitPayment } from "../../../models/SplitPayment";
import { AggregateSplitPayment } from "../../outputs/AggregateSplitPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitPayment)
export class AggregateSplitPaymentResolver {
  @TypeGraphQL.Query(_returns => AggregateSplitPayment, {
    nullable: false
  })
  async aggregateSplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSplitPaymentArgs): Promise<AggregateSplitPayment> {
    return getPrismaFromContext(ctx).splitPayment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
