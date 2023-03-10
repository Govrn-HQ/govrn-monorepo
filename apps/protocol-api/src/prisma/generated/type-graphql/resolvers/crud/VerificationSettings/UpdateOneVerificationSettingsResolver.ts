import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneVerificationSettingsArgs } from "./args/UpdateOneVerificationSettingsArgs";
import { VerificationSettings } from "../../../models/VerificationSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSettings)
export class UpdateOneVerificationSettingsResolver {
  @TypeGraphQL.Mutation(_returns => VerificationSettings, {
    nullable: true
  })
  async updateOneVerificationSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneVerificationSettingsArgs): Promise<VerificationSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSettings.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
