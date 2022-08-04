import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildContributionCreateWithoutContributionInput } from '../inputs/GuildContributionCreateWithoutContributionInput';
import { GuildContributionUpdateWithoutContributionInput } from '../inputs/GuildContributionUpdateWithoutContributionInput';
import { GuildContributionWhereUniqueInput } from '../inputs/GuildContributionWhereUniqueInput';

@TypeGraphQL.InputType(
  'GuildContributionUpsertWithWhereUniqueWithoutContributionInput',
  {
    isAbstract: true,
  },
)
export class GuildContributionUpsertWithWhereUniqueWithoutContributionInput {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionUpdateWithoutContributionInput, {
    nullable: false,
  })
  update!: GuildContributionUpdateWithoutContributionInput;

  @TypeGraphQL.Field(_type => GuildContributionCreateWithoutContributionInput, {
    nullable: false,
  })
  create!: GuildContributionCreateWithoutContributionInput;
}
