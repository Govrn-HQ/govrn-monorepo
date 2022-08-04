import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildUserUpdateWithoutUserInput } from '../inputs/GuildUserUpdateWithoutUserInput';
import { GuildUserWhereUniqueInput } from '../inputs/GuildUserWhereUniqueInput';

@TypeGraphQL.InputType('GuildUserUpdateWithWhereUniqueWithoutUserInput', {
  isAbstract: true,
})
export class GuildUserUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: GuildUserUpdateWithoutUserInput;
}
