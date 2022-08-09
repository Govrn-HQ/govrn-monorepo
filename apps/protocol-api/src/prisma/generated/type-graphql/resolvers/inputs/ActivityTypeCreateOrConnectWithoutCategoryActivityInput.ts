import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateWithoutCategoryActivityInput } from '../inputs/ActivityTypeCreateWithoutCategoryActivityInput';
import { ActivityTypeWhereUniqueInput } from '../inputs/ActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'ActivityTypeCreateOrConnectWithoutCategoryActivityInput',
  {
    isAbstract: true,
  },
)
export class ActivityTypeCreateOrConnectWithoutCategoryActivityInput {
  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutCategoryActivityInput, {
    nullable: false,
  })
  create!: ActivityTypeCreateWithoutCategoryActivityInput;
}
