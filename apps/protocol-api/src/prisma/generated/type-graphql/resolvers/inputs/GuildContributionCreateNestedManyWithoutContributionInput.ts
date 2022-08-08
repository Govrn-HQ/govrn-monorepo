import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildContributionCreateManyContributionInputEnvelope } from '../inputs/GuildContributionCreateManyContributionInputEnvelope';
import { GuildContributionCreateOrConnectWithoutContributionInput } from '../inputs/GuildContributionCreateOrConnectWithoutContributionInput';
import { GuildContributionCreateWithoutContributionInput } from '../inputs/GuildContributionCreateWithoutContributionInput';
import { GuildContributionWhereUniqueInput } from '../inputs/GuildContributionWhereUniqueInput';

@TypeGraphQL.InputType(
  'GuildContributionCreateNestedManyWithoutContributionInput',
  {
    isAbstract: true,
  },
)
export class GuildContributionCreateNestedManyWithoutContributionInput {
  @TypeGraphQL.Field(
    _type => [GuildContributionCreateWithoutContributionInput],
    {
      nullable: true,
    },
  )
  create?: GuildContributionCreateWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [GuildContributionCreateOrConnectWithoutContributionInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | GuildContributionCreateOrConnectWithoutContributionInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => GuildContributionCreateManyContributionInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?: GuildContributionCreateManyContributionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereUniqueInput], {
    nullable: true,
  })
  connect?: GuildContributionWhereUniqueInput[] | undefined;
}
