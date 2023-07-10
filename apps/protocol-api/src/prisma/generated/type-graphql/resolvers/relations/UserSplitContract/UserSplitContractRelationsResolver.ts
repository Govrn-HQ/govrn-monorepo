import * as TypeGraphQL from "type-graphql";
import { SplitContract } from "../../../models/SplitContract";
import { User } from "../../../models/User";
import { UserSplitContract } from "../../../models/UserSplitContract";
import { UserSplitContractSplit_contractArgs } from "./args/UserSplitContractSplit_contractArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserSplitContract)
export class UserSplitContractRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() userSplitContract: UserSplitContract, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).userSplitContract.findUnique({
      where: {
        id: userSplitContract.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [SplitContract], {
    nullable: false
  })
  async split_contract(@TypeGraphQL.Root() userSplitContract: UserSplitContract, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSplitContractSplit_contractArgs): Promise<SplitContract[]> {
    return getPrismaFromContext(ctx).userSplitContract.findUnique({
      where: {
        id: userSplitContract.id,
      },
    }).split_contract(args);
  }
}
