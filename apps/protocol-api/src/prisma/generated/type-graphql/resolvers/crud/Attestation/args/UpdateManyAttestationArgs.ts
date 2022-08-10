import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AttestationUpdateManyMutationInput } from '../../../inputs/AttestationUpdateManyMutationInput';
import { AttestationWhereInput } from '../../../inputs/AttestationWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyAttestationArgs {
  @TypeGraphQL.Field(_type => AttestationUpdateManyMutationInput, {
    nullable: false,
  })
  data!: AttestationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AttestationWhereInput, {
    nullable: true,
  })
  where?: AttestationWhereInput | undefined;
}
