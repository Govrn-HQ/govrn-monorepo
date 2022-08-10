import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.InputType(
  'CategoryActivityTypeCategory_activity_idActivity_type_idCompoundUniqueInput',
  {
    isAbstract: true,
  },
)
export class CategoryActivityTypeCategory_activity_idActivity_type_idCompoundUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  category_activity_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  activity_type_id!: number;
}
