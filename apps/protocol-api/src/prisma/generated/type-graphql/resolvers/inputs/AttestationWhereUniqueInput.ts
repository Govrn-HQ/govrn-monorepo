import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationUser_idContribution_idCompoundUniqueInput } from '../inputs/AttestationUser_idContribution_idCompoundUniqueInput';

@TypeGraphQL.InputType('AttestationWhereUniqueInput', {
  isAbstract: true,
})
export class AttestationWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field(
    _type => AttestationUser_idContribution_idCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  user_id_contribution_id?:
    | AttestationUser_idContribution_idCompoundUniqueInput
    | undefined;
}
