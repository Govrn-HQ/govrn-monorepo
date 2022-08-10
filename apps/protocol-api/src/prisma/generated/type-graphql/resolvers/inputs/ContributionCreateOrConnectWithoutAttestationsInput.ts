import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutAttestationsInput } from '../inputs/ContributionCreateWithoutAttestationsInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionCreateOrConnectWithoutAttestationsInput', {
  isAbstract: true,
})
export class ContributionCreateOrConnectWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutAttestationsInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutAttestationsInput;
}
