import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterUserCreateOrConnectWithoutUserInput } from '../inputs/TwitterUserCreateOrConnectWithoutUserInput';
import { TwitterUserCreateWithoutUserInput } from '../inputs/TwitterUserCreateWithoutUserInput';
import { TwitterUserWhereUniqueInput } from '../inputs/TwitterUserWhereUniqueInput';

@TypeGraphQL.InputType('TwitterUserCreateNestedOneWithoutUserInput', {
  isAbstract: true,
})
export class TwitterUserCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => TwitterUserCreateWithoutUserInput, {
    nullable: true,
  })
  create?: TwitterUserCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserCreateOrConnectWithoutUserInput, {
    nullable: true,
  })
  connectOrCreate?: TwitterUserCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: true,
  })
  connect?: TwitterUserWhereUniqueInput | undefined;
}
