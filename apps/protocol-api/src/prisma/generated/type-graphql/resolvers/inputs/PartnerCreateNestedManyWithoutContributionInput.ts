import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PartnerCreateManyContributionInputEnvelope } from '../inputs/PartnerCreateManyContributionInputEnvelope';
import { PartnerCreateOrConnectWithoutContributionInput } from '../inputs/PartnerCreateOrConnectWithoutContributionInput';
import { PartnerCreateWithoutContributionInput } from '../inputs/PartnerCreateWithoutContributionInput';
import { PartnerWhereUniqueInput } from '../inputs/PartnerWhereUniqueInput';

@TypeGraphQL.InputType('PartnerCreateNestedManyWithoutContributionInput', {
  isAbstract: true,
})
export class PartnerCreateNestedManyWithoutContributionInput {
  @TypeGraphQL.Field(_type => [PartnerCreateWithoutContributionInput], {
    nullable: true,
  })
  create?: PartnerCreateWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [PartnerCreateOrConnectWithoutContributionInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | PartnerCreateOrConnectWithoutContributionInput[]
    | undefined;

  @TypeGraphQL.Field(_type => PartnerCreateManyContributionInputEnvelope, {
    nullable: true,
  })
  createMany?: PartnerCreateManyContributionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereUniqueInput], {
    nullable: true,
  })
  connect?: PartnerWhereUniqueInput[] | undefined;
}
