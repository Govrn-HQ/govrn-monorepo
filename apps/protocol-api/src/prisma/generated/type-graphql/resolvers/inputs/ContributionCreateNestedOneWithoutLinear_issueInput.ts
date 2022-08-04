import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateOrConnectWithoutLinear_issueInput } from '../inputs/ContributionCreateOrConnectWithoutLinear_issueInput';
import { ContributionCreateWithoutLinear_issueInput } from '../inputs/ContributionCreateWithoutLinear_issueInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionCreateNestedOneWithoutLinear_issueInput', {
  isAbstract: true,
})
export class ContributionCreateNestedOneWithoutLinear_issueInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutLinear_issueInput, {
    nullable: true,
  })
  create?: ContributionCreateWithoutLinear_issueInput | undefined;

  @TypeGraphQL.Field(
    _type => ContributionCreateOrConnectWithoutLinear_issueInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | ContributionCreateOrConnectWithoutLinear_issueInput
    | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true,
  })
  connect?: ContributionWhereUniqueInput | undefined;
}
