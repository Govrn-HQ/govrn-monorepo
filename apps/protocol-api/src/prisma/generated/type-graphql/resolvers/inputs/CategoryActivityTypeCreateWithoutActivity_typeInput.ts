import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityCreateNestedOneWithoutActivityTypesInput } from '../inputs/CategoryActivityCreateNestedOneWithoutActivityTypesInput';

@TypeGraphQL.InputType('CategoryActivityTypeCreateWithoutActivity_typeInput', {
  isAbstract: true,
})
export class CategoryActivityTypeCreateWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(
    _type => CategoryActivityCreateNestedOneWithoutActivityTypesInput,
    {
      nullable: false,
    },
  )
  category_activity!: CategoryActivityCreateNestedOneWithoutActivityTypesInput;
}
