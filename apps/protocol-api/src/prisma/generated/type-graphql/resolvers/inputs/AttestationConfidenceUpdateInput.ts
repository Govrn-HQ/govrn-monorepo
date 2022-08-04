import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationUpdateManyWithoutConfidenceInput } from '../inputs/AttestationUpdateManyWithoutConfidenceInput';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';

@TypeGraphQL.InputType('AttestationConfidenceUpdateInput', {
  isAbstract: true,
})
export class AttestationConfidenceUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AttestationUpdateManyWithoutConfidenceInput, {
    nullable: true,
  })
  attestations?: AttestationUpdateManyWithoutConfidenceInput | undefined;
}
