import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateChainTypeArgs } from './args/AggregateChainTypeArgs';
import { ChainType } from '../../../models/ChainType';
import { AggregateChainType } from '../../outputs/AggregateChainType';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => ChainType)
export class AggregateChainTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateChainType, {
    nullable: false,
  })
  async aggregateChainType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateChainTypeArgs,
  ): Promise<AggregateChainType> {
    return getPrismaFromContext(ctx).chainType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
