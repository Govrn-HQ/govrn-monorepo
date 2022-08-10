import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildUserCreateManyGuildInputEnvelope } from '../inputs/GuildUserCreateManyGuildInputEnvelope';
import { GuildUserCreateOrConnectWithoutGuildInput } from '../inputs/GuildUserCreateOrConnectWithoutGuildInput';
import { GuildUserCreateWithoutGuildInput } from '../inputs/GuildUserCreateWithoutGuildInput';
import { GuildUserWhereUniqueInput } from '../inputs/GuildUserWhereUniqueInput';

@TypeGraphQL.InputType('GuildUserCreateNestedManyWithoutGuildInput', {
  isAbstract: true,
})
export class GuildUserCreateNestedManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [GuildUserCreateWithoutGuildInput], {
    nullable: true,
  })
  create?: GuildUserCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserCreateOrConnectWithoutGuildInput], {
    nullable: true,
  })
  connectOrCreate?: GuildUserCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateManyGuildInputEnvelope, {
    nullable: true,
  })
  createMany?: GuildUserCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereUniqueInput], {
    nullable: true,
  })
  connect?: GuildUserWhereUniqueInput[] | undefined;
}
