import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { DeleteContributionArgs } from './args/DeleteContributionArgs';
import { Contribution } from '../../../models/Contribution';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => Contribution)
export class DeleteContributionResolver {
  @TypeGraphQL.Mutation(_returns => Contribution, {
    nullable: true,
  })
  async deleteContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteContributionArgs,
  ): Promise<Contribution | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contribution.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
