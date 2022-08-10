import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { CreateAttestationArgs } from './args/CreateAttestationArgs';
import { Attestation } from '../../../models/Attestation';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => Attestation)
export class CreateAttestationResolver {
  @TypeGraphQL.Mutation(_returns => Attestation, {
    nullable: false,
  })
  async createAttestation(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAttestationArgs,
  ): Promise<Attestation> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).attestation.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
