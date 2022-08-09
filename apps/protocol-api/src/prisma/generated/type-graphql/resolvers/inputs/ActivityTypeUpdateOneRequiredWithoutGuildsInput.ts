import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateOrConnectWithoutGuildsInput } from '../inputs/ActivityTypeCreateOrConnectWithoutGuildsInput';
import { ActivityTypeCreateWithoutGuildsInput } from '../inputs/ActivityTypeCreateWithoutGuildsInput';
import { ActivityTypeUpdateWithoutGuildsInput } from '../inputs/ActivityTypeUpdateWithoutGuildsInput';
import { ActivityTypeUpsertWithoutGuildsInput } from '../inputs/ActivityTypeUpsertWithoutGuildsInput';
import { ActivityTypeWhereUniqueInput } from '../inputs/ActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType('ActivityTypeUpdateOneRequiredWithoutGuildsInput', {
  isAbstract: true,
})
export class ActivityTypeUpdateOneRequiredWithoutGuildsInput {
  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutGuildsInput, {
    nullable: true,
  })
  create?: ActivityTypeCreateWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateOrConnectWithoutGuildsInput, {
    nullable: true,
  })
  connectOrCreate?: ActivityTypeCreateOrConnectWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpsertWithoutGuildsInput, {
    nullable: true,
  })
  upsert?: ActivityTypeUpsertWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutGuildsInput, {
    nullable: true,
  })
  update?: ActivityTypeUpdateWithoutGuildsInput | undefined;
}
