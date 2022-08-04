import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateNestedOneWithoutCategoryActivityInput } from '../inputs/ActivityTypeCreateNestedOneWithoutCategoryActivityInput';

@TypeGraphQL.InputType(
  'CategoryActivityTypeCreateWithoutCategory_activityInput',
  {
    isAbstract: true,
  },
)
export class CategoryActivityTypeCreateWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(
    _type => ActivityTypeCreateNestedOneWithoutCategoryActivityInput,
    {
      nullable: false,
    },
  )
  activity_type!: ActivityTypeCreateNestedOneWithoutCategoryActivityInput;
}
