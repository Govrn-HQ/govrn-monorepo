import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AttestationOrderByWithRelationInput } from '../../../inputs/AttestationOrderByWithRelationInput';
import { AttestationWhereInput } from '../../../inputs/AttestationWhereInput';
import { AttestationWhereUniqueInput } from '../../../inputs/AttestationWhereUniqueInput';
import { AttestationScalarFieldEnum } from '../../../../enums/AttestationScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class FindManyAttestationArgs {
  @TypeGraphQL.Field(_type => AttestationWhereInput, {
    nullable: true,
  })
  where?: AttestationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttestationOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: AttestationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: true,
  })
  cursor?: AttestationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | 'id'
        | 'createdAt'
        | 'updatedAt'
        | 'confidence_id'
        | 'user_id'
        | 'contribution_id'
        | 'date_of_attestation'
      >
    | undefined;
}
