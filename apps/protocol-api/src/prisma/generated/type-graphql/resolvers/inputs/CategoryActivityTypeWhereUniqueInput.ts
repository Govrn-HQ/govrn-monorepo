import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeCategory_activity_idActivity_type_idCompoundUniqueInput } from '../inputs/CategoryActivityTypeCategory_activity_idActivity_type_idCompoundUniqueInput';

@TypeGraphQL.InputType('CategoryActivityTypeWhereUniqueInput', {
  isAbstract: true,
})
export class CategoryActivityTypeWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field(
    _type =>
      CategoryActivityTypeCategory_activity_idActivity_type_idCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  category_activity_id_activity_type_id?:
    | CategoryActivityTypeCategory_activity_idActivity_type_idCompoundUniqueInput
    | undefined;
}
