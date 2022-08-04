import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateOrConnectWithoutUsersInput } from '../inputs/ActivityTypeCreateOrConnectWithoutUsersInput';
import { ActivityTypeCreateWithoutUsersInput } from '../inputs/ActivityTypeCreateWithoutUsersInput';
import { ActivityTypeUpdateWithoutUsersInput } from '../inputs/ActivityTypeUpdateWithoutUsersInput';
import { ActivityTypeUpsertWithoutUsersInput } from '../inputs/ActivityTypeUpsertWithoutUsersInput';
import { ActivityTypeWhereUniqueInput } from '../inputs/ActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType('ActivityTypeUpdateOneRequiredWithoutUsersInput', {
  isAbstract: true,
})
export class ActivityTypeUpdateOneRequiredWithoutUsersInput {
  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutUsersInput, {
    nullable: true,
  })
  create?: ActivityTypeCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateOrConnectWithoutUsersInput, {
    nullable: true,
  })
  connectOrCreate?: ActivityTypeCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpsertWithoutUsersInput, {
    nullable: true,
  })
  upsert?: ActivityTypeUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutUsersInput, {
    nullable: true,
  })
  update?: ActivityTypeUpdateWithoutUsersInput | undefined;
}
