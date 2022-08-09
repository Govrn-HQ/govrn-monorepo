import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateManyProjectInputEnvelope } from '../inputs/LinearIssueCreateManyProjectInputEnvelope';
import { LinearIssueCreateOrConnectWithoutProjectInput } from '../inputs/LinearIssueCreateOrConnectWithoutProjectInput';
import { LinearIssueCreateWithoutProjectInput } from '../inputs/LinearIssueCreateWithoutProjectInput';
import { LinearIssueScalarWhereInput } from '../inputs/LinearIssueScalarWhereInput';
import { LinearIssueUpdateManyWithWhereWithoutProjectInput } from '../inputs/LinearIssueUpdateManyWithWhereWithoutProjectInput';
import { LinearIssueUpdateWithWhereUniqueWithoutProjectInput } from '../inputs/LinearIssueUpdateWithWhereUniqueWithoutProjectInput';
import { LinearIssueUpsertWithWhereUniqueWithoutProjectInput } from '../inputs/LinearIssueUpsertWithWhereUniqueWithoutProjectInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueUpdateManyWithoutProjectInput', {
  isAbstract: true,
})
export class LinearIssueUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [LinearIssueCreateWithoutProjectInput], {
    nullable: true,
  })
  create?: LinearIssueCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueCreateOrConnectWithoutProjectInput], {
    nullable: true,
  })
  connectOrCreate?: LinearIssueCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [LinearIssueUpsertWithWhereUniqueWithoutProjectInput],
    {
      nullable: true,
    },
  )
  upsert?: LinearIssueUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateManyProjectInputEnvelope, {
    nullable: true,
  })
  createMany?: LinearIssueCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true,
  })
  set?: LinearIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: LinearIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true,
  })
  delete?: LinearIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true,
  })
  connect?: LinearIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [LinearIssueUpdateWithWhereUniqueWithoutProjectInput],
    {
      nullable: true,
    },
  )
  update?: LinearIssueUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [LinearIssueUpdateManyWithWhereWithoutProjectInput],
    {
      nullable: true,
    },
  )
  updateMany?: LinearIssueUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: LinearIssueScalarWhereInput[] | undefined;
}
