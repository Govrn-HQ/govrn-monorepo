import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeUpdateOneRequiredWithoutGuildsInput } from '../inputs/ActivityTypeUpdateOneRequiredWithoutGuildsInput';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';

@TypeGraphQL.InputType('GuildActivityTypeUpdateWithoutGuildInput', {
  isAbstract: true,
})
export class GuildActivityTypeUpdateWithoutGuildInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneRequiredWithoutGuildsInput, {
    nullable: true,
  })
  activity_type?: ActivityTypeUpdateOneRequiredWithoutGuildsInput | undefined;
}
