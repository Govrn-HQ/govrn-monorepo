import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildContributionCreateNestedManyWithoutGuildInput } from '../inputs/GuildContributionCreateNestedManyWithoutGuildInput';
import { GuildUserCreateNestedManyWithoutGuildInput } from '../inputs/GuildUserCreateNestedManyWithoutGuildInput';
import { TwitterAccountCreateNestedOneWithoutGuildInput } from '../inputs/TwitterAccountCreateNestedOneWithoutGuildInput';
import { GuildStatus } from '../../enums/GuildStatus';

@TypeGraphQL.InputType('GuildCreateWithoutActivity_typeInput', {
  isAbstract: true,
})
export class GuildCreateWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  discord_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  congrats_channel?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  logo?: string | undefined;

  @TypeGraphQL.Field(
    _type => GuildContributionCreateNestedManyWithoutGuildInput,
    {
      nullable: true,
    },
  )
  contributions?:
    | GuildContributionCreateNestedManyWithoutGuildInput
    | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateNestedManyWithoutGuildInput, {
    nullable: true,
  })
  users?: GuildUserCreateNestedManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountCreateNestedOneWithoutGuildInput, {
    nullable: true,
  })
  twitter_account?: TwitterAccountCreateNestedOneWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  contribution_reporting_channel?: number | undefined;

  @TypeGraphQL.Field(_type => GuildStatus, {
    nullable: true,
  })
  status?: 'INPUTTED' | 'VALIDATED' | 'ONBOARDED' | undefined;
}
