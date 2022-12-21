import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTwitterUserArgs } from "./args/AggregateTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";
import { AggregateTwitterUser } from "../../outputs/AggregateTwitterUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class AggregateTwitterUserResolver {
  @TypeGraphQL.Query(_returns => AggregateTwitterUser, {
    nullable: false
  })
  async aggregateTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitterUserArgs): Promise<AggregateTwitterUser> {
    return getPrismaFromContext(ctx).twitterUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
