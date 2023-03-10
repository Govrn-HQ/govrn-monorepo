import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationSettingsArgs } from "./args/AggregateVerificationSettingsArgs";
import { VerificationSettings } from "../../../models/VerificationSettings";
import { AggregateVerificationSettings } from "../../outputs/AggregateVerificationSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSettings)
export class AggregateVerificationSettingsResolver {
  @TypeGraphQL.Query(_returns => AggregateVerificationSettings, {
    nullable: false
  })
  async aggregateVerificationSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVerificationSettingsArgs): Promise<AggregateVerificationSettings> {
    return getPrismaFromContext(ctx).verificationSettings.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
