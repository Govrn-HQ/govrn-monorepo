import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneVerificationSettingArgs } from "./args/UpdateOneVerificationSettingArgs";
import { VerificationSetting } from "../../../models/VerificationSetting";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSetting)
export class UpdateOneVerificationSettingResolver {
  @TypeGraphQL.Mutation(_returns => VerificationSetting, {
    nullable: true
  })
  async updateOneVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneVerificationSettingArgs): Promise<VerificationSetting | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
