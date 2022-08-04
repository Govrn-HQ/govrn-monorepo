import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { DeleteManyTwitterAccountArgs } from './args/DeleteManyTwitterAccountArgs';
import { TwitterAccount } from '../../../models/TwitterAccount';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class DeleteManyTwitterAccountResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyTwitterAccount(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyTwitterAccountArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterAccount.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
