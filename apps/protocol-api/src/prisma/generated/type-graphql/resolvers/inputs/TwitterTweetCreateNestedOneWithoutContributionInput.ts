import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterTweetCreateOrConnectWithoutContributionInput } from '../inputs/TwitterTweetCreateOrConnectWithoutContributionInput';
import { TwitterTweetCreateWithoutContributionInput } from '../inputs/TwitterTweetCreateWithoutContributionInput';
import { TwitterTweetWhereUniqueInput } from '../inputs/TwitterTweetWhereUniqueInput';

@TypeGraphQL.InputType('TwitterTweetCreateNestedOneWithoutContributionInput', {
  isAbstract: true,
})
export class TwitterTweetCreateNestedOneWithoutContributionInput {
  @TypeGraphQL.Field(_type => TwitterTweetCreateWithoutContributionInput, {
    nullable: true,
  })
  create?: TwitterTweetCreateWithoutContributionInput | undefined;

  @TypeGraphQL.Field(
    _type => TwitterTweetCreateOrConnectWithoutContributionInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | TwitterTweetCreateOrConnectWithoutContributionInput
    | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: true,
  })
  connect?: TwitterTweetWhereUniqueInput | undefined;
}
