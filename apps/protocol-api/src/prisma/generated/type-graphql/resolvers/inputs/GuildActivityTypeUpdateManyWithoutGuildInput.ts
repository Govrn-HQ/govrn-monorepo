import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildActivityTypeCreateManyGuildInputEnvelope } from '../inputs/GuildActivityTypeCreateManyGuildInputEnvelope';
import { GuildActivityTypeCreateOrConnectWithoutGuildInput } from '../inputs/GuildActivityTypeCreateOrConnectWithoutGuildInput';
import { GuildActivityTypeCreateWithoutGuildInput } from '../inputs/GuildActivityTypeCreateWithoutGuildInput';
import { GuildActivityTypeScalarWhereInput } from '../inputs/GuildActivityTypeScalarWhereInput';
import { GuildActivityTypeUpdateManyWithWhereWithoutGuildInput } from '../inputs/GuildActivityTypeUpdateManyWithWhereWithoutGuildInput';
import { GuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput } from '../inputs/GuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput';
import { GuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput } from '../inputs/GuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput';
import { GuildActivityTypeWhereUniqueInput } from '../inputs/GuildActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType('GuildActivityTypeUpdateManyWithoutGuildInput', {
  isAbstract: true,
})
export class GuildActivityTypeUpdateManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateWithoutGuildInput], {
    nullable: true,
  })
  create?: GuildActivityTypeCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [GuildActivityTypeCreateOrConnectWithoutGuildInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | GuildActivityTypeCreateOrConnectWithoutGuildInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [GuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | GuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput[]
    | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateManyGuildInputEnvelope, {
    nullable: true,
  })
  createMany?: GuildActivityTypeCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true,
  })
  set?: GuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: GuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true,
  })
  delete?: GuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true,
  })
  connect?: GuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [GuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput],
    {
      nullable: true,
    },
  )
  update?:
    | GuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [GuildActivityTypeUpdateManyWithWhereWithoutGuildInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | GuildActivityTypeUpdateManyWithWhereWithoutGuildInput[]
    | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: GuildActivityTypeScalarWhereInput[] | undefined;
}
