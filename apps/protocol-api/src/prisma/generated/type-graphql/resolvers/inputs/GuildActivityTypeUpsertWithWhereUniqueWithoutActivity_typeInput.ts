import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildActivityTypeCreateWithoutActivity_typeInput } from '../inputs/GuildActivityTypeCreateWithoutActivity_typeInput';
import { GuildActivityTypeUpdateWithoutActivity_typeInput } from '../inputs/GuildActivityTypeUpdateWithoutActivity_typeInput';
import { GuildActivityTypeWhereUniqueInput } from '../inputs/GuildActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'GuildActivityTypeUpsertWithWhereUniqueWithoutActivity_typeInput',
  {
    isAbstract: true,
  },
)
export class GuildActivityTypeUpsertWithWhereUniqueWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(
    _type => GuildActivityTypeUpdateWithoutActivity_typeInput,
    {
      nullable: false,
    },
  )
  update!: GuildActivityTypeUpdateWithoutActivity_typeInput;

  @TypeGraphQL.Field(
    _type => GuildActivityTypeCreateWithoutActivity_typeInput,
    {
      nullable: false,
    },
  )
  create!: GuildActivityTypeCreateWithoutActivity_typeInput;
}
