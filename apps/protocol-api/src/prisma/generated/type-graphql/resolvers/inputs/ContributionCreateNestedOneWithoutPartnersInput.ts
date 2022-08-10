import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateOrConnectWithoutPartnersInput } from '../inputs/ContributionCreateOrConnectWithoutPartnersInput';
import { ContributionCreateWithoutPartnersInput } from '../inputs/ContributionCreateWithoutPartnersInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionCreateNestedOneWithoutPartnersInput', {
  isAbstract: true,
})
export class ContributionCreateNestedOneWithoutPartnersInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutPartnersInput, {
    nullable: true,
  })
  create?: ContributionCreateWithoutPartnersInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateOrConnectWithoutPartnersInput, {
    nullable: true,
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutPartnersInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true,
  })
  connect?: ContributionWhereUniqueInput | undefined;
}
