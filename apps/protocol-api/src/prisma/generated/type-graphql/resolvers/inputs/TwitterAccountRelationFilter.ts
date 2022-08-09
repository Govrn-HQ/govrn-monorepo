import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterAccountWhereInput } from '../inputs/TwitterAccountWhereInput';

@TypeGraphQL.InputType('TwitterAccountRelationFilter', {
  isAbstract: true,
})
export class TwitterAccountRelationFilter {
  @TypeGraphQL.Field(_type => TwitterAccountWhereInput, {
    nullable: true,
  })
  is?: TwitterAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountWhereInput, {
    nullable: true,
  })
  isNot?: TwitterAccountWhereInput | undefined;
}
