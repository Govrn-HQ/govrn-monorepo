import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';

@TypeGraphQL.InputType('AttestationScalarWhereInput', {
  isAbstract: true,
})
export class AttestationScalarWhereInput {
  @TypeGraphQL.Field(_type => [AttestationScalarWhereInput], {
    nullable: true,
  })
  AND?: AttestationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarWhereInput], {
    nullable: true,
  })
  OR?: AttestationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarWhereInput], {
    nullable: true,
  })
  NOT?: AttestationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  confidence_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  contribution_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  date_of_attestation?: DateTimeFilter | undefined;
}
