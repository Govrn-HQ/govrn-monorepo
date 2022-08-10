import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PartnerCreateManyUserInput } from '../inputs/PartnerCreateManyUserInput';

@TypeGraphQL.InputType('PartnerCreateManyUserInputEnvelope', {
  isAbstract: true,
})
export class PartnerCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PartnerCreateManyUserInput], {
    nullable: false,
  })
  data!: PartnerCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
