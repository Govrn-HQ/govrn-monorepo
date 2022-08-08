import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildCreateWithoutActivity_typeInput } from '../inputs/GuildCreateWithoutActivity_typeInput';
import { GuildUpdateWithoutActivity_typeInput } from '../inputs/GuildUpdateWithoutActivity_typeInput';

@TypeGraphQL.InputType('GuildUpsertWithoutActivity_typeInput', {
  isAbstract: true,
})
export class GuildUpsertWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutActivity_typeInput, {
    nullable: false,
  })
  update!: GuildUpdateWithoutActivity_typeInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutActivity_typeInput, {
    nullable: false,
  })
  create!: GuildCreateWithoutActivity_typeInput;
}
