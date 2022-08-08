import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterUserCreateOrConnectWithoutTweetsInput } from '../inputs/TwitterUserCreateOrConnectWithoutTweetsInput';
import { TwitterUserCreateWithoutTweetsInput } from '../inputs/TwitterUserCreateWithoutTweetsInput';
import { TwitterUserUpdateWithoutTweetsInput } from '../inputs/TwitterUserUpdateWithoutTweetsInput';
import { TwitterUserUpsertWithoutTweetsInput } from '../inputs/TwitterUserUpsertWithoutTweetsInput';
import { TwitterUserWhereUniqueInput } from '../inputs/TwitterUserWhereUniqueInput';

@TypeGraphQL.InputType('TwitterUserUpdateOneWithoutTweetsInput', {
  isAbstract: true,
})
export class TwitterUserUpdateOneWithoutTweetsInput {
  @TypeGraphQL.Field(_type => TwitterUserCreateWithoutTweetsInput, {
    nullable: true,
  })
  create?: TwitterUserCreateWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserCreateOrConnectWithoutTweetsInput, {
    nullable: true,
  })
  connectOrCreate?: TwitterUserCreateOrConnectWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserUpsertWithoutTweetsInput, {
    nullable: true,
  })
  upsert?: TwitterUserUpsertWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: true,
  })
  connect?: TwitterUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserUpdateWithoutTweetsInput, {
    nullable: true,
  })
  update?: TwitterUserUpdateWithoutTweetsInput | undefined;
}
