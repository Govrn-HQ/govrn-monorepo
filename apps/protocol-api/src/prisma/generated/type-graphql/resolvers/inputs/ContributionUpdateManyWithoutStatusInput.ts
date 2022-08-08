import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateManyStatusInputEnvelope } from '../inputs/ContributionCreateManyStatusInputEnvelope';
import { ContributionCreateOrConnectWithoutStatusInput } from '../inputs/ContributionCreateOrConnectWithoutStatusInput';
import { ContributionCreateWithoutStatusInput } from '../inputs/ContributionCreateWithoutStatusInput';
import { ContributionScalarWhereInput } from '../inputs/ContributionScalarWhereInput';
import { ContributionUpdateManyWithWhereWithoutStatusInput } from '../inputs/ContributionUpdateManyWithWhereWithoutStatusInput';
import { ContributionUpdateWithWhereUniqueWithoutStatusInput } from '../inputs/ContributionUpdateWithWhereUniqueWithoutStatusInput';
import { ContributionUpsertWithWhereUniqueWithoutStatusInput } from '../inputs/ContributionUpsertWithWhereUniqueWithoutStatusInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionUpdateManyWithoutStatusInput', {
  isAbstract: true,
})
export class ContributionUpdateManyWithoutStatusInput {
  @TypeGraphQL.Field(_type => [ContributionCreateWithoutStatusInput], {
    nullable: true,
  })
  create?: ContributionCreateWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionCreateOrConnectWithoutStatusInput], {
    nullable: true,
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [ContributionUpsertWithWhereUniqueWithoutStatusInput],
    {
      nullable: true,
    },
  )
  upsert?: ContributionUpsertWithWhereUniqueWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateManyStatusInputEnvelope, {
    nullable: true,
  })
  createMany?: ContributionCreateManyStatusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true,
  })
  set?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true,
  })
  delete?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true,
  })
  connect?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [ContributionUpdateWithWhereUniqueWithoutStatusInput],
    {
      nullable: true,
    },
  )
  update?: ContributionUpdateWithWhereUniqueWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [ContributionUpdateManyWithWhereWithoutStatusInput],
    {
      nullable: true,
    },
  )
  updateMany?: ContributionUpdateManyWithWhereWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ContributionScalarWhereInput[] | undefined;
}
