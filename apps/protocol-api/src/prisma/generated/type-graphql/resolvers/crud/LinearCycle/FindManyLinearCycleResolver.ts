import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindManyLinearCycleArgs } from './args/FindManyLinearCycleArgs';
import { LinearCycle } from '../../../models/LinearCycle';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => LinearCycle)
export class FindManyLinearCycleResolver {
  @TypeGraphQL.Query(_returns => [LinearCycle], {
    nullable: false,
  })
  async linearCycles(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyLinearCycleArgs,
  ): Promise<LinearCycle[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearCycle.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
