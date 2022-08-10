import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterUserCreateWithoutUserInput } from '../inputs/TwitterUserCreateWithoutUserInput';
import { TwitterUserWhereUniqueInput } from '../inputs/TwitterUserWhereUniqueInput';

@TypeGraphQL.InputType('TwitterUserCreateOrConnectWithoutUserInput', {
  isAbstract: true,
})
export class TwitterUserCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: false,
  })
  where!: TwitterUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterUserCreateWithoutUserInput, {
    nullable: false,
  })
  create!: TwitterUserCreateWithoutUserInput;
}
