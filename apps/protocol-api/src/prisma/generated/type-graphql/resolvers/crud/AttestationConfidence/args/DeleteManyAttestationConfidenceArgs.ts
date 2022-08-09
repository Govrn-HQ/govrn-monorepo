import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AttestationConfidenceWhereInput } from '../../../inputs/AttestationConfidenceWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyAttestationConfidenceArgs {
  @TypeGraphQL.Field(_type => AttestationConfidenceWhereInput, {
    nullable: true,
  })
  where?: AttestationConfidenceWhereInput | undefined;
}
