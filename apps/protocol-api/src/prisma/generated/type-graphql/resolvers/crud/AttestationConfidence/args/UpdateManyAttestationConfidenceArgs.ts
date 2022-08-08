import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AttestationConfidenceUpdateManyMutationInput } from '../../../inputs/AttestationConfidenceUpdateManyMutationInput';
import { AttestationConfidenceWhereInput } from '../../../inputs/AttestationConfidenceWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyAttestationConfidenceArgs {
  @TypeGraphQL.Field(_type => AttestationConfidenceUpdateManyMutationInput, {
    nullable: false,
  })
  data!: AttestationConfidenceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AttestationConfidenceWhereInput, {
    nullable: true,
  })
  where?: AttestationConfidenceWhereInput | undefined;
}
