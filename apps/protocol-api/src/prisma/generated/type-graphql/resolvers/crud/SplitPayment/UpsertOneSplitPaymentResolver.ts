import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSplitPaymentArgs } from "./args/UpsertOneSplitPaymentArgs";
import { SplitPayment } from "../../../models/SplitPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitPayment)
export class UpsertOneSplitPaymentResolver {
  @TypeGraphQL.Mutation(_returns => SplitPayment, {
    nullable: false
  })
  async upsertOneSplitPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSplitPaymentArgs): Promise<SplitPayment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitPayment.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
