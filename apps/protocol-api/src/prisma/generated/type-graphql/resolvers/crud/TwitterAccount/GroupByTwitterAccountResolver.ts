import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { GroupByTwitterAccountArgs } from './args/GroupByTwitterAccountArgs';
import { TwitterAccount } from '../../../models/TwitterAccount';
import { TwitterAccountGroupBy } from '../../outputs/TwitterAccountGroupBy';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class GroupByTwitterAccountResolver {
  @TypeGraphQL.Query(_returns => [TwitterAccountGroupBy], {
    nullable: false,
  })
  async groupByTwitterAccount(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByTwitterAccountArgs,
  ): Promise<TwitterAccountGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).twitterAccount.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
