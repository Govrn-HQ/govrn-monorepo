import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildActivityTypeUpdateWithoutActivity_typeInput } from '../inputs/GuildActivityTypeUpdateWithoutActivity_typeInput';
import { GuildActivityTypeWhereUniqueInput } from '../inputs/GuildActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'GuildActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput',
  {
    isAbstract: true,
  },
)
export class GuildActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput {
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
  data!: GuildActivityTypeUpdateWithoutActivity_typeInput;
}
