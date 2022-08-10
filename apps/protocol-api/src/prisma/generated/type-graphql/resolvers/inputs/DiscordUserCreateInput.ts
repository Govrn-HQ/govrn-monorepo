import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateNestedOneWithoutDiscord_usersInput } from '../inputs/UserCreateNestedOneWithoutDiscord_usersInput';

@TypeGraphQL.InputType('DiscordUserCreateInput', {
  isAbstract: true,
})
export class DiscordUserCreateInput {
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
  display_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  discord_id!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDiscord_usersInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutDiscord_usersInput;
}
