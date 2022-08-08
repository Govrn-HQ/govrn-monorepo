import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeScalarWhereInput } from '../inputs/CategoryActivityTypeScalarWhereInput';
import { CategoryActivityTypeUpdateManyMutationInput } from '../inputs/CategoryActivityTypeUpdateManyMutationInput';

@TypeGraphQL.InputType(
  'CategoryActivityTypeUpdateManyWithWhereWithoutCategory_activityInput',
  {
    isAbstract: true,
  },
)
export class CategoryActivityTypeUpdateManyWithWhereWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => CategoryActivityTypeScalarWhereInput, {
    nullable: false,
  })
  where!: CategoryActivityTypeScalarWhereInput;

  @TypeGraphQL.Field(_type => CategoryActivityTypeUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CategoryActivityTypeUpdateManyMutationInput;
}
