import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeCreateWithoutActivity_typeInput } from '../inputs/CategoryActivityTypeCreateWithoutActivity_typeInput';
import { CategoryActivityTypeWhereUniqueInput } from '../inputs/CategoryActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'CategoryActivityTypeCreateOrConnectWithoutActivity_typeInput',
  {
    isAbstract: true,
  },
)
export class CategoryActivityTypeCreateOrConnectWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoryActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(
    _type => CategoryActivityTypeCreateWithoutActivity_typeInput,
    {
      nullable: false,
    },
  )
  create!: CategoryActivityTypeCreateWithoutActivity_typeInput;
}
