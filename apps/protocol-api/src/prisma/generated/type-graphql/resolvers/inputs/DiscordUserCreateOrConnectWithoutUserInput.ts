import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DiscordUserCreateWithoutUserInput } from '../inputs/DiscordUserCreateWithoutUserInput';
import { DiscordUserWhereUniqueInput } from '../inputs/DiscordUserWhereUniqueInput';

@TypeGraphQL.InputType('DiscordUserCreateOrConnectWithoutUserInput', {
  isAbstract: true,
})
export class DiscordUserCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: false,
  })
  where!: DiscordUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutUserInput, {
    nullable: false,
  })
  create!: DiscordUserCreateWithoutUserInput;
}
