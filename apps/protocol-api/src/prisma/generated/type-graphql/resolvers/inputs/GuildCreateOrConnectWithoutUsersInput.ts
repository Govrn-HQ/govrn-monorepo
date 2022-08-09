import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildCreateWithoutUsersInput } from '../inputs/GuildCreateWithoutUsersInput';
import { GuildWhereUniqueInput } from '../inputs/GuildWhereUniqueInput';

@TypeGraphQL.InputType('GuildCreateOrConnectWithoutUsersInput', {
  isAbstract: true,
})
export class GuildCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutUsersInput, {
    nullable: false,
  })
  create!: GuildCreateWithoutUsersInput;
}
