import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { DeleteManyDiscordUserArgs } from './args/DeleteManyDiscordUserArgs';
import { DiscordUser } from '../../../models/DiscordUser';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => DiscordUser)
export class DeleteManyDiscordUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyDiscordUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyDiscordUserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).discordUser.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
