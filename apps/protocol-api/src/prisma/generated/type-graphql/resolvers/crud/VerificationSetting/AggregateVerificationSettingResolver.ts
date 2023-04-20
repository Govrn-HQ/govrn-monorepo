import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationSettingArgs } from "./args/AggregateVerificationSettingArgs";
import { VerificationSetting } from "../../../models/VerificationSetting";
import { AggregateVerificationSetting } from "../../outputs/AggregateVerificationSetting";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSetting)
export class AggregateVerificationSettingResolver {
  @TypeGraphQL.Query(_returns => AggregateVerificationSetting, {
    nullable: false
  })
  async aggregateVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVerificationSettingArgs): Promise<AggregateVerificationSetting> {
    return getPrismaFromContext(ctx).verificationSetting.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
