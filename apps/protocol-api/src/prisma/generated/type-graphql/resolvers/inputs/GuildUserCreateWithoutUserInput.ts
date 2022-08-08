import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildCreateNestedOneWithoutUsersInput } from '../inputs/GuildCreateNestedOneWithoutUsersInput';

@TypeGraphQL.InputType('GuildUserCreateWithoutUserInput', {
  isAbstract: true,
})
export class GuildUserCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutUsersInput, {
    nullable: false,
  })
  guild!: GuildCreateNestedOneWithoutUsersInput;
}
