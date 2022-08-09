import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterAccountCreateWithoutGuildInput } from '../inputs/TwitterAccountCreateWithoutGuildInput';
import { TwitterAccountWhereUniqueInput } from '../inputs/TwitterAccountWhereUniqueInput';

@TypeGraphQL.InputType('TwitterAccountCreateOrConnectWithoutGuildInput', {
  isAbstract: true,
})
export class TwitterAccountCreateOrConnectWithoutGuildInput {
  @TypeGraphQL.Field(_type => TwitterAccountWhereUniqueInput, {
    nullable: false,
  })
  where!: TwitterAccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterAccountCreateWithoutGuildInput, {
    nullable: false,
  })
  create!: TwitterAccountCreateWithoutGuildInput;
}
