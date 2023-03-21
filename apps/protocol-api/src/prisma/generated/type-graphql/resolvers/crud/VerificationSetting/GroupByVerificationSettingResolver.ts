import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByVerificationSettingArgs } from "./args/GroupByVerificationSettingArgs";
import { VerificationSetting } from "../../../models/VerificationSetting";
import { VerificationSettingGroupBy } from "../../outputs/VerificationSettingGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSetting)
export class GroupByVerificationSettingResolver {
  @TypeGraphQL.Query(_returns => [VerificationSettingGroupBy], {
    nullable: false
  })
  async groupByVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVerificationSettingArgs): Promise<VerificationSettingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
