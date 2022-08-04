import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildContributionCreateWithoutGuildInput } from '../inputs/GuildContributionCreateWithoutGuildInput';
import { GuildContributionUpdateWithoutGuildInput } from '../inputs/GuildContributionUpdateWithoutGuildInput';
import { GuildContributionWhereUniqueInput } from '../inputs/GuildContributionWhereUniqueInput';

@TypeGraphQL.InputType(
  'GuildContributionUpsertWithWhereUniqueWithoutGuildInput',
  {
    isAbstract: true,
  },
)
export class GuildContributionUpsertWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionUpdateWithoutGuildInput, {
    nullable: false,
  })
  update!: GuildContributionUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => GuildContributionCreateWithoutGuildInput, {
    nullable: false,
  })
  create!: GuildContributionCreateWithoutGuildInput;
}
