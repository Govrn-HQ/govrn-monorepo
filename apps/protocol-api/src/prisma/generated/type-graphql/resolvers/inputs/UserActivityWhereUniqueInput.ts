import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserActivityUser_idActivity_type_idCompoundUniqueInput } from '../inputs/UserActivityUser_idActivity_type_idCompoundUniqueInput';

@TypeGraphQL.InputType('UserActivityWhereUniqueInput', {
  isAbstract: true,
})
export class UserActivityWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field(
    _type => UserActivityUser_idActivity_type_idCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  user_id_activity_type_id?:
    | UserActivityUser_idActivity_type_idCompoundUniqueInput
    | undefined;
}
