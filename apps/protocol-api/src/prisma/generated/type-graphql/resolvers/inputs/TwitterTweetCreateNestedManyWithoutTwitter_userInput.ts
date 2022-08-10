import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterTweetCreateManyTwitter_userInputEnvelope } from '../inputs/TwitterTweetCreateManyTwitter_userInputEnvelope';
import { TwitterTweetCreateOrConnectWithoutTwitter_userInput } from '../inputs/TwitterTweetCreateOrConnectWithoutTwitter_userInput';
import { TwitterTweetCreateWithoutTwitter_userInput } from '../inputs/TwitterTweetCreateWithoutTwitter_userInput';
import { TwitterTweetWhereUniqueInput } from '../inputs/TwitterTweetWhereUniqueInput';

@TypeGraphQL.InputType('TwitterTweetCreateNestedManyWithoutTwitter_userInput', {
  isAbstract: true,
})
export class TwitterTweetCreateNestedManyWithoutTwitter_userInput {
  @TypeGraphQL.Field(_type => [TwitterTweetCreateWithoutTwitter_userInput], {
    nullable: true,
  })
  create?: TwitterTweetCreateWithoutTwitter_userInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [TwitterTweetCreateOrConnectWithoutTwitter_userInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | TwitterTweetCreateOrConnectWithoutTwitter_userInput[]
    | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetCreateManyTwitter_userInputEnvelope, {
    nullable: true,
  })
  createMany?: TwitterTweetCreateManyTwitter_userInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetWhereUniqueInput], {
    nullable: true,
  })
  connect?: TwitterTweetWhereUniqueInput[] | undefined;
}
