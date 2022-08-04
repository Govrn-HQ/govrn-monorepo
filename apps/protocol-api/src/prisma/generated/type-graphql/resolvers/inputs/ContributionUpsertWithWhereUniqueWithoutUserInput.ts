import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutUserInput } from '../inputs/ContributionCreateWithoutUserInput';
import { ContributionUpdateWithoutUserInput } from '../inputs/ContributionUpdateWithoutUserInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionUpsertWithWhereUniqueWithoutUserInput', {
  isAbstract: true,
})
export class ContributionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: ContributionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutUserInput;
}
