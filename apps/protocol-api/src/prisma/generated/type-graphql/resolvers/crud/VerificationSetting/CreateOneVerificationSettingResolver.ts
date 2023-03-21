import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneVerificationSettingArgs } from "./args/CreateOneVerificationSettingArgs";
import { VerificationSetting } from "../../../models/VerificationSetting";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSetting)
export class CreateOneVerificationSettingResolver {
  @TypeGraphQL.Mutation(_returns => VerificationSetting, {
    nullable: false
  })
  async createOneVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneVerificationSettingArgs): Promise<VerificationSetting> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
