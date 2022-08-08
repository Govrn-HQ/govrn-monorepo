import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeWhereInput } from '../inputs/ActivityTypeWhereInput';

@TypeGraphQL.InputType('ActivityTypeRelationFilter', {
  isAbstract: true,
})
export class ActivityTypeRelationFilter {
  @TypeGraphQL.Field(_type => ActivityTypeWhereInput, {
    nullable: true,
  })
  is?: ActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereInput, {
    nullable: true,
  })
  isNot?: ActivityTypeWhereInput | undefined;
}
