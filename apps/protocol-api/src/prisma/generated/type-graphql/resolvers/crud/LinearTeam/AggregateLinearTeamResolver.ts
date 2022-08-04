import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateLinearTeamArgs } from './args/AggregateLinearTeamArgs';
import { LinearTeam } from '../../../models/LinearTeam';
import { AggregateLinearTeam } from '../../outputs/AggregateLinearTeam';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => LinearTeam)
export class AggregateLinearTeamResolver {
  @TypeGraphQL.Query(_returns => AggregateLinearTeam, {
    nullable: false,
  })
  async aggregateLinearTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateLinearTeamArgs,
  ): Promise<AggregateLinearTeam> {
    return getPrismaFromContext(ctx).linearTeam.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
