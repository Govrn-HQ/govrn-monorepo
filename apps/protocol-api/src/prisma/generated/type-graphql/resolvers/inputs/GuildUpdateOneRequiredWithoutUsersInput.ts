import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildCreateOrConnectWithoutUsersInput } from '../inputs/GuildCreateOrConnectWithoutUsersInput';
import { GuildCreateWithoutUsersInput } from '../inputs/GuildCreateWithoutUsersInput';
import { GuildUpdateWithoutUsersInput } from '../inputs/GuildUpdateWithoutUsersInput';
import { GuildUpsertWithoutUsersInput } from '../inputs/GuildUpsertWithoutUsersInput';
import { GuildWhereUniqueInput } from '../inputs/GuildWhereUniqueInput';

@TypeGraphQL.InputType('GuildUpdateOneRequiredWithoutUsersInput', {
  isAbstract: true,
})
export class GuildUpdateOneRequiredWithoutUsersInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutUsersInput, {
    nullable: true,
  })
  create?: GuildCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutUsersInput, {
    nullable: true,
  })
  connectOrCreate?: GuildCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutUsersInput, {
    nullable: true,
  })
  upsert?: GuildUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true,
  })
  connect?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutUsersInput, {
    nullable: true,
  })
  update?: GuildUpdateWithoutUsersInput | undefined;
}
