import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildCreateOrConnectWithoutContributionsInput } from '../inputs/GuildCreateOrConnectWithoutContributionsInput';
import { GuildCreateWithoutContributionsInput } from '../inputs/GuildCreateWithoutContributionsInput';
import { GuildUpdateWithoutContributionsInput } from '../inputs/GuildUpdateWithoutContributionsInput';
import { GuildUpsertWithoutContributionsInput } from '../inputs/GuildUpsertWithoutContributionsInput';
import { GuildWhereUniqueInput } from '../inputs/GuildWhereUniqueInput';

@TypeGraphQL.InputType('GuildUpdateOneRequiredWithoutContributionsInput', {
  isAbstract: true,
})
export class GuildUpdateOneRequiredWithoutContributionsInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutContributionsInput, {
    nullable: true,
  })
  create?: GuildCreateWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutContributionsInput, {
    nullable: true,
  })
  connectOrCreate?: GuildCreateOrConnectWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutContributionsInput, {
    nullable: true,
  })
  upsert?: GuildUpsertWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true,
  })
  connect?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutContributionsInput, {
    nullable: true,
  })
  update?: GuildUpdateWithoutContributionsInput | undefined;
}
