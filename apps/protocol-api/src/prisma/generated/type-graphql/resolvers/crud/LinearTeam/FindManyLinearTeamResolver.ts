import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindManyLinearTeamArgs } from './args/FindManyLinearTeamArgs';
import { LinearTeam } from '../../../models/LinearTeam';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => LinearTeam)
export class FindManyLinearTeamResolver {
  @TypeGraphQL.Query(_returns => [LinearTeam], {
    nullable: false,
  })
  async linearTeams(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyLinearTeamArgs,
  ): Promise<LinearTeam[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearTeam.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
