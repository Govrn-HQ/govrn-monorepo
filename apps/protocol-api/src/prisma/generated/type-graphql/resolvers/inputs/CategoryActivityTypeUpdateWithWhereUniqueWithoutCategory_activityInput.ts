import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeUpdateWithoutCategory_activityInput } from '../inputs/CategoryActivityTypeUpdateWithoutCategory_activityInput';
import { CategoryActivityTypeWhereUniqueInput } from '../inputs/CategoryActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'CategoryActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput',
  {
    isAbstract: true,
  },
)
export class CategoryActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoryActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(
    _type => CategoryActivityTypeUpdateWithoutCategory_activityInput,
    {
      nullable: false,
    },
  )
  data!: CategoryActivityTypeUpdateWithoutCategory_activityInput;
}
