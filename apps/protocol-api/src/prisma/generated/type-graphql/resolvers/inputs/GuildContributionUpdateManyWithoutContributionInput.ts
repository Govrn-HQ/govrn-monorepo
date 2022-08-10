import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildContributionCreateManyContributionInputEnvelope } from '../inputs/GuildContributionCreateManyContributionInputEnvelope';
import { GuildContributionCreateOrConnectWithoutContributionInput } from '../inputs/GuildContributionCreateOrConnectWithoutContributionInput';
import { GuildContributionCreateWithoutContributionInput } from '../inputs/GuildContributionCreateWithoutContributionInput';
import { GuildContributionScalarWhereInput } from '../inputs/GuildContributionScalarWhereInput';
import { GuildContributionUpdateManyWithWhereWithoutContributionInput } from '../inputs/GuildContributionUpdateManyWithWhereWithoutContributionInput';
import { GuildContributionUpdateWithWhereUniqueWithoutContributionInput } from '../inputs/GuildContributionUpdateWithWhereUniqueWithoutContributionInput';
import { GuildContributionUpsertWithWhereUniqueWithoutContributionInput } from '../inputs/GuildContributionUpsertWithWhereUniqueWithoutContributionInput';
import { GuildContributionWhereUniqueInput } from '../inputs/GuildContributionWhereUniqueInput';

@TypeGraphQL.InputType('GuildContributionUpdateManyWithoutContributionInput', {
  isAbstract: true,
})
export class GuildContributionUpdateManyWithoutContributionInput {
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
    _type => [GuildContributionUpsertWithWhereUniqueWithoutContributionInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | GuildContributionUpsertWithWhereUniqueWithoutContributionInput[]
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
  set?: GuildContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: GuildContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereUniqueInput], {
    nullable: true,
  })
  delete?: GuildContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereUniqueInput], {
    nullable: true,
  })
  connect?: GuildContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [GuildContributionUpdateWithWhereUniqueWithoutContributionInput],
    {
      nullable: true,
    },
  )
  update?:
    | GuildContributionUpdateWithWhereUniqueWithoutContributionInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [GuildContributionUpdateManyWithWhereWithoutContributionInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | GuildContributionUpdateManyWithWhereWithoutContributionInput[]
    | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: GuildContributionScalarWhereInput[] | undefined;
}
