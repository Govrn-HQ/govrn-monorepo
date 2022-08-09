import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterAccountCreateWithoutGuildInput } from '../inputs/TwitterAccountCreateWithoutGuildInput';
import { TwitterAccountUpdateWithoutGuildInput } from '../inputs/TwitterAccountUpdateWithoutGuildInput';

@TypeGraphQL.InputType('TwitterAccountUpsertWithoutGuildInput', {
  isAbstract: true,
})
export class TwitterAccountUpsertWithoutGuildInput {
  @TypeGraphQL.Field(_type => TwitterAccountUpdateWithoutGuildInput, {
    nullable: false,
  })
  update!: TwitterAccountUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => TwitterAccountCreateWithoutGuildInput, {
    nullable: false,
  })
  create!: TwitterAccountCreateWithoutGuildInput;
}
