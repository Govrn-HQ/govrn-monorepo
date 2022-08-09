import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { DeleteTwitterAccountArgs } from './args/DeleteTwitterAccountArgs';
import { TwitterAccount } from '../../../models/TwitterAccount';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class DeleteTwitterAccountResolver {
  @TypeGraphQL.Mutation(_returns => TwitterAccount, {
    nullable: true,
  })
  async deleteTwitterAccount(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteTwitterAccountArgs,
  ): Promise<TwitterAccount | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterAccount.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
