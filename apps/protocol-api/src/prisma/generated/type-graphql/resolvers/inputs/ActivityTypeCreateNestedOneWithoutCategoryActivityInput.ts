import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateOrConnectWithoutCategoryActivityInput } from '../inputs/ActivityTypeCreateOrConnectWithoutCategoryActivityInput';
import { ActivityTypeCreateWithoutCategoryActivityInput } from '../inputs/ActivityTypeCreateWithoutCategoryActivityInput';
import { ActivityTypeWhereUniqueInput } from '../inputs/ActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'ActivityTypeCreateNestedOneWithoutCategoryActivityInput',
  {
    isAbstract: true,
  },
)
export class ActivityTypeCreateNestedOneWithoutCategoryActivityInput {
  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutCategoryActivityInput, {
    nullable: true,
  })
  create?: ActivityTypeCreateWithoutCategoryActivityInput | undefined;

  @TypeGraphQL.Field(
    _type => ActivityTypeCreateOrConnectWithoutCategoryActivityInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | ActivityTypeCreateOrConnectWithoutCategoryActivityInput
    | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActivityTypeWhereUniqueInput | undefined;
}
