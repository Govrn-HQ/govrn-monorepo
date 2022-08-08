import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildContributionUpdateWithoutGuildInput } from '../inputs/GuildContributionUpdateWithoutGuildInput';
import { GuildContributionWhereUniqueInput } from '../inputs/GuildContributionWhereUniqueInput';

@TypeGraphQL.InputType(
  'GuildContributionUpdateWithWhereUniqueWithoutGuildInput',
  {
    isAbstract: true,
  },
)
export class GuildContributionUpdateWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionUpdateWithoutGuildInput, {
    nullable: false,
  })
  data!: GuildContributionUpdateWithoutGuildInput;
}
