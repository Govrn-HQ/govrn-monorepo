import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildContributionCreateWithoutGuildInput } from '../inputs/GuildContributionCreateWithoutGuildInput';
import { GuildContributionWhereUniqueInput } from '../inputs/GuildContributionWhereUniqueInput';

@TypeGraphQL.InputType('GuildContributionCreateOrConnectWithoutGuildInput', {
  isAbstract: true,
})
export class GuildContributionCreateOrConnectWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionCreateWithoutGuildInput, {
    nullable: false,
  })
  create!: GuildContributionCreateWithoutGuildInput;
}
