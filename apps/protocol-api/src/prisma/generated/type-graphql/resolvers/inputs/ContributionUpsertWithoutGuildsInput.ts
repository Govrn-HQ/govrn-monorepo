import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutGuildsInput } from '../inputs/ContributionCreateWithoutGuildsInput';
import { ContributionUpdateWithoutGuildsInput } from '../inputs/ContributionUpdateWithoutGuildsInput';

@TypeGraphQL.InputType('ContributionUpsertWithoutGuildsInput', {
  isAbstract: true,
})
export class ContributionUpsertWithoutGuildsInput {
  @TypeGraphQL.Field(_type => ContributionUpdateWithoutGuildsInput, {
    nullable: false,
  })
  update!: ContributionUpdateWithoutGuildsInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutGuildsInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutGuildsInput;
}
