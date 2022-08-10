import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildCreateWithoutContributionsInput } from '../inputs/GuildCreateWithoutContributionsInput';
import { GuildWhereUniqueInput } from '../inputs/GuildWhereUniqueInput';

@TypeGraphQL.InputType('GuildCreateOrConnectWithoutContributionsInput', {
  isAbstract: true,
})
export class GuildCreateOrConnectWithoutContributionsInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutContributionsInput, {
    nullable: false,
  })
  create!: GuildCreateWithoutContributionsInput;
}
