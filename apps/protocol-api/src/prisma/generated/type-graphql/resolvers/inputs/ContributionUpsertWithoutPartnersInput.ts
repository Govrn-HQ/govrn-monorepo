import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutPartnersInput } from '../inputs/ContributionCreateWithoutPartnersInput';
import { ContributionUpdateWithoutPartnersInput } from '../inputs/ContributionUpdateWithoutPartnersInput';

@TypeGraphQL.InputType('ContributionUpsertWithoutPartnersInput', {
  isAbstract: true,
})
export class ContributionUpsertWithoutPartnersInput {
  @TypeGraphQL.Field(_type => ContributionUpdateWithoutPartnersInput, {
    nullable: false,
  })
  update!: ContributionUpdateWithoutPartnersInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutPartnersInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutPartnersInput;
}
