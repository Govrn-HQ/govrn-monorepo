import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AttestationConfidenceCreateManyInput } from '../../../inputs/AttestationConfidenceCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyAttestationConfidenceArgs {
  @TypeGraphQL.Field(_type => [AttestationConfidenceCreateManyInput], {
    nullable: false,
  })
  data!: AttestationConfidenceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
