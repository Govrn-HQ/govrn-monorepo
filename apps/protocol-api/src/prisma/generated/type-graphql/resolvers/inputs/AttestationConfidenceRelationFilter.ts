import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationConfidenceWhereInput } from '../inputs/AttestationConfidenceWhereInput';

@TypeGraphQL.InputType('AttestationConfidenceRelationFilter', {
  isAbstract: true,
})
export class AttestationConfidenceRelationFilter {
  @TypeGraphQL.Field(_type => AttestationConfidenceWhereInput, {
    nullable: true,
  })
  is?: AttestationConfidenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceWhereInput, {
    nullable: true,
  })
  isNot?: AttestationConfidenceWhereInput | undefined;
}
