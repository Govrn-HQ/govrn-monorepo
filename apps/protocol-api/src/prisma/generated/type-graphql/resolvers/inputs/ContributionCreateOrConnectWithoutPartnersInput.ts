import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutPartnersInput } from '../inputs/ContributionCreateWithoutPartnersInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionCreateOrConnectWithoutPartnersInput', {
  isAbstract: true,
})
export class ContributionCreateOrConnectWithoutPartnersInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutPartnersInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutPartnersInput;
}
