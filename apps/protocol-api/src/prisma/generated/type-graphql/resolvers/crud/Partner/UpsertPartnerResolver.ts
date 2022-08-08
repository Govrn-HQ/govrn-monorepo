import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpsertPartnerArgs } from './args/UpsertPartnerArgs';
import { Partner } from '../../../models/Partner';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => Partner)
export class UpsertPartnerResolver {
  @TypeGraphQL.Mutation(_returns => Partner, {
    nullable: false,
  })
  async upsertPartner(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertPartnerArgs,
  ): Promise<Partner> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).partner.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
