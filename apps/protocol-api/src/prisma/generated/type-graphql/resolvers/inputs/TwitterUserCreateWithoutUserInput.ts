import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterTweetCreateNestedManyWithoutTwitter_userInput } from '../inputs/TwitterTweetCreateNestedManyWithoutTwitter_userInput';

@TypeGraphQL.InputType('TwitterUserCreateWithoutUserInput', {
  isAbstract: true,
})
export class TwitterUserCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  twitter_user_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  description?: string | undefined;

  @TypeGraphQL.Field(
    _type => TwitterTweetCreateNestedManyWithoutTwitter_userInput,
    {
      nullable: true,
    },
  )
  tweets?: TwitterTweetCreateNestedManyWithoutTwitter_userInput | undefined;
}
