import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTwitterAccountArgs } from "./args/AggregateTwitterAccountArgs";
import { TwitterAccount } from "../../../models/TwitterAccount";
import { AggregateTwitterAccount } from "../../outputs/AggregateTwitterAccount";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class AggregateTwitterAccountResolver {
  @TypeGraphQL.Query(_returns => AggregateTwitterAccount, {
    nullable: false
  })
  async aggregateTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitterAccountArgs): Promise<AggregateTwitterAccount> {
    return getPrismaFromContext(ctx).twitterAccount.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
