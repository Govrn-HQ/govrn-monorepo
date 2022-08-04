import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterUserCreateWithoutTweetsInput } from '../inputs/TwitterUserCreateWithoutTweetsInput';
import { TwitterUserUpdateWithoutTweetsInput } from '../inputs/TwitterUserUpdateWithoutTweetsInput';

@TypeGraphQL.InputType('TwitterUserUpsertWithoutTweetsInput', {
  isAbstract: true,
})
export class TwitterUserUpsertWithoutTweetsInput {
  @TypeGraphQL.Field(_type => TwitterUserUpdateWithoutTweetsInput, {
    nullable: false,
  })
  update!: TwitterUserUpdateWithoutTweetsInput;

  @TypeGraphQL.Field(_type => TwitterUserCreateWithoutTweetsInput, {
    nullable: false,
  })
  create!: TwitterUserCreateWithoutTweetsInput;
}
