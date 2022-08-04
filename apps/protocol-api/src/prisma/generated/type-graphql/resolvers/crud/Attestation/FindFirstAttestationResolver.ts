import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindFirstAttestationArgs } from './args/FindFirstAttestationArgs';
import { Attestation } from '../../../models/Attestation';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => Attestation)
export class FindFirstAttestationResolver {
  @TypeGraphQL.Query(_returns => Attestation, {
    nullable: true,
  })
  async findFirstAttestation(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAttestationArgs,
  ): Promise<Attestation | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).attestation.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
