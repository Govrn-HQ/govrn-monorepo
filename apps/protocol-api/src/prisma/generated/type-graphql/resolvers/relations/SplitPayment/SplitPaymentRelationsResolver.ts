import * as TypeGraphQL from "type-graphql";
import { SplitContract } from "../../../models/SplitContract";
import { SplitPayment } from "../../../models/SplitPayment";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitPayment)
export class SplitPaymentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async sender_user(@TypeGraphQL.Root() splitPayment: SplitPayment, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).splitPayment.findUnique({
      where: {
        id: splitPayment.id,
      },
    }).sender_user({});
  }

  @TypeGraphQL.FieldResolver(_type => SplitContract, {
    nullable: false
  })
  async split_contract(@TypeGraphQL.Root() splitPayment: SplitPayment, @TypeGraphQL.Ctx() ctx: any): Promise<SplitContract> {
    return getPrismaFromContext(ctx).splitPayment.findUnique({
      where: {
        id: splitPayment.id,
      },
    }).split_contract({});
  }
}
