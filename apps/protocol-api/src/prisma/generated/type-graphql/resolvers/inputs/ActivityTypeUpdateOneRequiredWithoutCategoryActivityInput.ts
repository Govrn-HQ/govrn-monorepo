import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateOrConnectWithoutCategoryActivityInput } from '../inputs/ActivityTypeCreateOrConnectWithoutCategoryActivityInput';
import { ActivityTypeCreateWithoutCategoryActivityInput } from '../inputs/ActivityTypeCreateWithoutCategoryActivityInput';
import { ActivityTypeUpdateWithoutCategoryActivityInput } from '../inputs/ActivityTypeUpdateWithoutCategoryActivityInput';
import { ActivityTypeUpsertWithoutCategoryActivityInput } from '../inputs/ActivityTypeUpsertWithoutCategoryActivityInput';
import { ActivityTypeWhereUniqueInput } from '../inputs/ActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'ActivityTypeUpdateOneRequiredWithoutCategoryActivityInput',
  {
    isAbstract: true,
  },
)
export class ActivityTypeUpdateOneRequiredWithoutCategoryActivityInput {
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

  @TypeGraphQL.Field(_type => ActivityTypeUpsertWithoutCategoryActivityInput, {
    nullable: true,
  })
  upsert?: ActivityTypeUpsertWithoutCategoryActivityInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutCategoryActivityInput, {
    nullable: true,
  })
  update?: ActivityTypeUpdateWithoutCategoryActivityInput | undefined;
}
