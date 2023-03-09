import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByVerificationSettingsArgs } from "./args/GroupByVerificationSettingsArgs";
import { VerificationSettings } from "../../../models/VerificationSettings";
import { VerificationSettingsGroupBy } from "../../outputs/VerificationSettingsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSettings)
export class GroupByVerificationSettingsResolver {
  @TypeGraphQL.Query(_returns => [VerificationSettingsGroupBy], {
    nullable: false
  })
  async groupByVerificationSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVerificationSettingsArgs): Promise<VerificationSettingsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSettings.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
