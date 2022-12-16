import * as TypeGraphQL from "type-graphql";
import { ChainType } from "../../../models/ChainType";
import { User } from "../../../models/User";
import { ChainTypeUsersArgs } from "./args/ChainTypeUsersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChainType)
export class ChainTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() chainType: ChainType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ChainTypeUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).chainType.findUnique({
      where: {
        id: chainType.id,
      },
    }).users(args);
  }
}
