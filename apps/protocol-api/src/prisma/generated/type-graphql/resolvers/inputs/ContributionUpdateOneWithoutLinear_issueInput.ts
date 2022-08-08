import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateOrConnectWithoutLinear_issueInput } from '../inputs/ContributionCreateOrConnectWithoutLinear_issueInput';
import { ContributionCreateWithoutLinear_issueInput } from '../inputs/ContributionCreateWithoutLinear_issueInput';
import { ContributionUpdateWithoutLinear_issueInput } from '../inputs/ContributionUpdateWithoutLinear_issueInput';
import { ContributionUpsertWithoutLinear_issueInput } from '../inputs/ContributionUpsertWithoutLinear_issueInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionUpdateOneWithoutLinear_issueInput', {
  isAbstract: true,
})
export class ContributionUpdateOneWithoutLinear_issueInput {
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

  @TypeGraphQL.Field(_type => ContributionUpsertWithoutLinear_issueInput, {
    nullable: true,
  })
  upsert?: ContributionUpsertWithoutLinear_issueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true,
  })
  connect?: ContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutLinear_issueInput, {
    nullable: true,
  })
  update?: ContributionUpdateWithoutLinear_issueInput | undefined;
}
