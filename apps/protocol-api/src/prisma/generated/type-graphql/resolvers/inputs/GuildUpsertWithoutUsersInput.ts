import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildCreateWithoutUsersInput } from '../inputs/GuildCreateWithoutUsersInput';
import { GuildUpdateWithoutUsersInput } from '../inputs/GuildUpdateWithoutUsersInput';

@TypeGraphQL.InputType('GuildUpsertWithoutUsersInput', {
  isAbstract: true,
})
export class GuildUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutUsersInput, {
    nullable: false,
  })
  update!: GuildUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutUsersInput, {
    nullable: false,
  })
  create!: GuildCreateWithoutUsersInput;
}
