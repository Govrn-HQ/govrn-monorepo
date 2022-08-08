import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutGuildsInput } from '../inputs/ContributionCreateWithoutGuildsInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionCreateOrConnectWithoutGuildsInput', {
  isAbstract: true,
})
export class ContributionCreateOrConnectWithoutGuildsInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutGuildsInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutGuildsInput;
}
