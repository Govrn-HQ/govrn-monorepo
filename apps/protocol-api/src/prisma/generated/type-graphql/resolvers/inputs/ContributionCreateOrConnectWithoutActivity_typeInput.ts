import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutActivity_typeInput } from '../inputs/ContributionCreateWithoutActivity_typeInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionCreateOrConnectWithoutActivity_typeInput', {
  isAbstract: true,
})
export class ContributionCreateOrConnectWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutActivity_typeInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutActivity_typeInput;
}
