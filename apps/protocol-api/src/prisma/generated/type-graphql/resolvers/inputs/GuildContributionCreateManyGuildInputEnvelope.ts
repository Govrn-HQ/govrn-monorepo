import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildContributionCreateManyGuildInput } from '../inputs/GuildContributionCreateManyGuildInput';

@TypeGraphQL.InputType('GuildContributionCreateManyGuildInputEnvelope', {
  isAbstract: true,
})
export class GuildContributionCreateManyGuildInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildContributionCreateManyGuildInput], {
    nullable: false,
  })
  data!: GuildContributionCreateManyGuildInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
