import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DiscordUserUpdateWithoutUserInput } from '../inputs/DiscordUserUpdateWithoutUserInput';
import { DiscordUserWhereUniqueInput } from '../inputs/DiscordUserWhereUniqueInput';

@TypeGraphQL.InputType('DiscordUserUpdateWithWhereUniqueWithoutUserInput', {
  isAbstract: true,
})
export class DiscordUserUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: false,
  })
  where!: DiscordUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => DiscordUserUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: DiscordUserUpdateWithoutUserInput;
}
