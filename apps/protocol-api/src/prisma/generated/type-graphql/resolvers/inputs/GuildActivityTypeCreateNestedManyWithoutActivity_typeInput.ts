import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildActivityTypeCreateManyActivity_typeInputEnvelope } from '../inputs/GuildActivityTypeCreateManyActivity_typeInputEnvelope';
import { GuildActivityTypeCreateOrConnectWithoutActivity_typeInput } from '../inputs/GuildActivityTypeCreateOrConnectWithoutActivity_typeInput';
import { GuildActivityTypeCreateWithoutActivity_typeInput } from '../inputs/GuildActivityTypeCreateWithoutActivity_typeInput';
import { GuildActivityTypeWhereUniqueInput } from '../inputs/GuildActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'GuildActivityTypeCreateNestedManyWithoutActivity_typeInput',
  {
    isAbstract: true,
  },
)
export class GuildActivityTypeCreateNestedManyWithoutActivity_typeInput {
  @TypeGraphQL.Field(
    _type => [GuildActivityTypeCreateWithoutActivity_typeInput],
    {
      nullable: true,
    },
  )
  create?: GuildActivityTypeCreateWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [GuildActivityTypeCreateOrConnectWithoutActivity_typeInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | GuildActivityTypeCreateOrConnectWithoutActivity_typeInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => GuildActivityTypeCreateManyActivity_typeInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?:
    | GuildActivityTypeCreateManyActivity_typeInputEnvelope
    | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true,
  })
  connect?: GuildActivityTypeWhereUniqueInput[] | undefined;
}
