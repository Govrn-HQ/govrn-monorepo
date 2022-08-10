import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateOrConnectWithoutTweetInput } from '../inputs/ContributionCreateOrConnectWithoutTweetInput';
import { ContributionCreateWithoutTweetInput } from '../inputs/ContributionCreateWithoutTweetInput';
import { ContributionUpdateWithoutTweetInput } from '../inputs/ContributionUpdateWithoutTweetInput';
import { ContributionUpsertWithoutTweetInput } from '../inputs/ContributionUpsertWithoutTweetInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionUpdateOneWithoutTweetInput', {
  isAbstract: true,
})
export class ContributionUpdateOneWithoutTweetInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutTweetInput, {
    nullable: true,
  })
  create?: ContributionCreateWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateOrConnectWithoutTweetInput, {
    nullable: true,
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpsertWithoutTweetInput, {
    nullable: true,
  })
  upsert?: ContributionUpsertWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true,
  })
  connect?: ContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutTweetInput, {
    nullable: true,
  })
  update?: ContributionUpdateWithoutTweetInput | undefined;
}
