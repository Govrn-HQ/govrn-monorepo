import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityCreateWithoutActivityTypesInput } from '../inputs/CategoryActivityCreateWithoutActivityTypesInput';
import { CategoryActivityUpdateWithoutActivityTypesInput } from '../inputs/CategoryActivityUpdateWithoutActivityTypesInput';

@TypeGraphQL.InputType('CategoryActivityUpsertWithoutActivityTypesInput', {
  isAbstract: true,
})
export class CategoryActivityUpsertWithoutActivityTypesInput {
  @TypeGraphQL.Field(_type => CategoryActivityUpdateWithoutActivityTypesInput, {
    nullable: false,
  })
  update!: CategoryActivityUpdateWithoutActivityTypesInput;

  @TypeGraphQL.Field(_type => CategoryActivityCreateWithoutActivityTypesInput, {
    nullable: false,
  })
  create!: CategoryActivityCreateWithoutActivityTypesInput;
}
