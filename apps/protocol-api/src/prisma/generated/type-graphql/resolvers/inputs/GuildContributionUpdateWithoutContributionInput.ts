import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { GuildUpdateOneRequiredWithoutContributionsInput } from '../inputs/GuildUpdateOneRequiredWithoutContributionsInput';

@TypeGraphQL.InputType('GuildContributionUpdateWithoutContributionInput', {
  isAbstract: true,
})
export class GuildContributionUpdateWithoutContributionInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutContributionsInput, {
    nullable: true,
  })
  guild?: GuildUpdateOneRequiredWithoutContributionsInput | undefined;
}
