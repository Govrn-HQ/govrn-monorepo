import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AttestationConfidenceWhereUniqueInput } from '../../../inputs/AttestationConfidenceWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class FindUniqueAttestationConfidenceArgs {
  @TypeGraphQL.Field(_type => AttestationConfidenceWhereUniqueInput, {
    nullable: false,
  })
  where!: AttestationConfidenceWhereUniqueInput;
}
