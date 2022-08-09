import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DiscordUserScalarWhereInput } from '../inputs/DiscordUserScalarWhereInput';
import { DiscordUserUpdateManyMutationInput } from '../inputs/DiscordUserUpdateManyMutationInput';

@TypeGraphQL.InputType('DiscordUserUpdateManyWithWhereWithoutUserInput', {
  isAbstract: true,
})
export class DiscordUserUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => DiscordUserScalarWhereInput, {
    nullable: false,
  })
  where!: DiscordUserScalarWhereInput;

  @TypeGraphQL.Field(_type => DiscordUserUpdateManyMutationInput, {
    nullable: false,
  })
  data!: DiscordUserUpdateManyMutationInput;
}
