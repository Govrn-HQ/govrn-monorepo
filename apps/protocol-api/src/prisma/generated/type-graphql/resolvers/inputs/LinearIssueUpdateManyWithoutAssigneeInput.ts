import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateManyAssigneeInputEnvelope } from '../inputs/LinearIssueCreateManyAssigneeInputEnvelope';
import { LinearIssueCreateOrConnectWithoutAssigneeInput } from '../inputs/LinearIssueCreateOrConnectWithoutAssigneeInput';
import { LinearIssueCreateWithoutAssigneeInput } from '../inputs/LinearIssueCreateWithoutAssigneeInput';
import { LinearIssueScalarWhereInput } from '../inputs/LinearIssueScalarWhereInput';
import { LinearIssueUpdateManyWithWhereWithoutAssigneeInput } from '../inputs/LinearIssueUpdateManyWithWhereWithoutAssigneeInput';
import { LinearIssueUpdateWithWhereUniqueWithoutAssigneeInput } from '../inputs/LinearIssueUpdateWithWhereUniqueWithoutAssigneeInput';
import { LinearIssueUpsertWithWhereUniqueWithoutAssigneeInput } from '../inputs/LinearIssueUpsertWithWhereUniqueWithoutAssigneeInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueUpdateManyWithoutAssigneeInput', {
  isAbstract: true,
})
export class LinearIssueUpdateManyWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => [LinearIssueCreateWithoutAssigneeInput], {
    nullable: true,
  })
  create?: LinearIssueCreateWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [LinearIssueCreateOrConnectWithoutAssigneeInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | LinearIssueCreateOrConnectWithoutAssigneeInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [LinearIssueUpsertWithWhereUniqueWithoutAssigneeInput],
    {
      nullable: true,
    },
  )
  upsert?: LinearIssueUpsertWithWhereUniqueWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateManyAssigneeInputEnvelope, {
    nullable: true,
  })
  createMany?: LinearIssueCreateManyAssigneeInputEnvelope | undefined;

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
    _type => [LinearIssueUpdateWithWhereUniqueWithoutAssigneeInput],
    {
      nullable: true,
    },
  )
  update?: LinearIssueUpdateWithWhereUniqueWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [LinearIssueUpdateManyWithWhereWithoutAssigneeInput],
    {
      nullable: true,
    },
  )
  updateMany?: LinearIssueUpdateManyWithWhereWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: LinearIssueScalarWhereInput[] | undefined;
}
