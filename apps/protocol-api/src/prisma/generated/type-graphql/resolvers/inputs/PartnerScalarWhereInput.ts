import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';

@TypeGraphQL.InputType('PartnerScalarWhereInput', {
  isAbstract: true,
})
export class PartnerScalarWhereInput {
  @TypeGraphQL.Field(_type => [PartnerScalarWhereInput], {
    nullable: true,
  })
  AND?: PartnerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerScalarWhereInput], {
    nullable: true,
  })
  OR?: PartnerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerScalarWhereInput], {
    nullable: true,
  })
  NOT?: PartnerScalarWhereInput[] | undefined;

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
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  contribution_id?: IntFilter | undefined;
}
