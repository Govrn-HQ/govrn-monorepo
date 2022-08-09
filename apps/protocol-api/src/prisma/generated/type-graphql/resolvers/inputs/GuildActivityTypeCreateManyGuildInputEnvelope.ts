import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildActivityTypeCreateManyGuildInput } from '../inputs/GuildActivityTypeCreateManyGuildInput';

@TypeGraphQL.InputType('GuildActivityTypeCreateManyGuildInputEnvelope', {
  isAbstract: true,
})
export class GuildActivityTypeCreateManyGuildInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateManyGuildInput], {
    nullable: false,
  })
  data!: GuildActivityTypeCreateManyGuildInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
