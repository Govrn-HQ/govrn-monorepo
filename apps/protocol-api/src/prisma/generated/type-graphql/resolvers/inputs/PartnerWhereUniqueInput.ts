import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PartnerUser_idContribution_idCompoundUniqueInput } from '../inputs/PartnerUser_idContribution_idCompoundUniqueInput';

@TypeGraphQL.InputType('PartnerWhereUniqueInput', {
  isAbstract: true,
})
export class PartnerWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field(
    _type => PartnerUser_idContribution_idCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  user_id_contribution_id?:
    | PartnerUser_idContribution_idCompoundUniqueInput
    | undefined;
}
