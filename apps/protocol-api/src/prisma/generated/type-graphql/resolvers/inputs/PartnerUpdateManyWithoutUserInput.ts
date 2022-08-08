import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PartnerCreateManyUserInputEnvelope } from '../inputs/PartnerCreateManyUserInputEnvelope';
import { PartnerCreateOrConnectWithoutUserInput } from '../inputs/PartnerCreateOrConnectWithoutUserInput';
import { PartnerCreateWithoutUserInput } from '../inputs/PartnerCreateWithoutUserInput';
import { PartnerScalarWhereInput } from '../inputs/PartnerScalarWhereInput';
import { PartnerUpdateManyWithWhereWithoutUserInput } from '../inputs/PartnerUpdateManyWithWhereWithoutUserInput';
import { PartnerUpdateWithWhereUniqueWithoutUserInput } from '../inputs/PartnerUpdateWithWhereUniqueWithoutUserInput';
import { PartnerUpsertWithWhereUniqueWithoutUserInput } from '../inputs/PartnerUpsertWithWhereUniqueWithoutUserInput';
import { PartnerWhereUniqueInput } from '../inputs/PartnerWhereUniqueInput';

@TypeGraphQL.InputType('PartnerUpdateManyWithoutUserInput', {
  isAbstract: true,
})
export class PartnerUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PartnerCreateWithoutUserInput], {
    nullable: true,
  })
  create?: PartnerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: PartnerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: PartnerUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PartnerCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: PartnerCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereUniqueInput], {
    nullable: true,
  })
  set?: PartnerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: PartnerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereUniqueInput], {
    nullable: true,
  })
  delete?: PartnerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereUniqueInput], {
    nullable: true,
  })
  connect?: PartnerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: PartnerUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: PartnerUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PartnerScalarWhereInput[] | undefined;
}
