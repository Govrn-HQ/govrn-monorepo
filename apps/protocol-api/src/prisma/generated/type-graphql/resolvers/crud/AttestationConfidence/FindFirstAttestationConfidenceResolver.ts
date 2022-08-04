import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindFirstAttestationConfidenceArgs } from './args/FindFirstAttestationConfidenceArgs';
import { AttestationConfidence } from '../../../models/AttestationConfidence';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class FindFirstAttestationConfidenceResolver {
  @TypeGraphQL.Query(_returns => AttestationConfidence, {
    nullable: true,
  })
  async findFirstAttestationConfidence(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAttestationConfidenceArgs,
  ): Promise<AttestationConfidence | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).attestationConfidence.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
