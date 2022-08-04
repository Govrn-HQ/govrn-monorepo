import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeCreateManyCategory_activityInputEnvelope } from '../inputs/CategoryActivityTypeCreateManyCategory_activityInputEnvelope';
import { CategoryActivityTypeCreateOrConnectWithoutCategory_activityInput } from '../inputs/CategoryActivityTypeCreateOrConnectWithoutCategory_activityInput';
import { CategoryActivityTypeCreateWithoutCategory_activityInput } from '../inputs/CategoryActivityTypeCreateWithoutCategory_activityInput';
import { CategoryActivityTypeScalarWhereInput } from '../inputs/CategoryActivityTypeScalarWhereInput';
import { CategoryActivityTypeUpdateManyWithWhereWithoutCategory_activityInput } from '../inputs/CategoryActivityTypeUpdateManyWithWhereWithoutCategory_activityInput';
import { CategoryActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput } from '../inputs/CategoryActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput';
import { CategoryActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput } from '../inputs/CategoryActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput';
import { CategoryActivityTypeWhereUniqueInput } from '../inputs/CategoryActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'CategoryActivityTypeUpdateManyWithoutCategory_activityInput',
  {
    isAbstract: true,
  },
)
export class CategoryActivityTypeUpdateManyWithoutCategory_activityInput {
  @TypeGraphQL.Field(
    _type => [CategoryActivityTypeCreateWithoutCategory_activityInput],
    {
      nullable: true,
    },
  )
  create?:
    | CategoryActivityTypeCreateWithoutCategory_activityInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [CategoryActivityTypeCreateOrConnectWithoutCategory_activityInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | CategoryActivityTypeCreateOrConnectWithoutCategory_activityInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [
      CategoryActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput,
    ],
    {
      nullable: true,
    },
  )
  upsert?:
    | CategoryActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => CategoryActivityTypeCreateManyCategory_activityInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?:
    | CategoryActivityTypeCreateManyCategory_activityInputEnvelope
    | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeWhereUniqueInput], {
    nullable: true,
  })
  set?: CategoryActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: CategoryActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeWhereUniqueInput], {
    nullable: true,
  })
  delete?: CategoryActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeWhereUniqueInput], {
    nullable: true,
  })
  connect?: CategoryActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [
      CategoryActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput,
    ],
    {
      nullable: true,
    },
  )
  update?:
    | CategoryActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [
      CategoryActivityTypeUpdateManyWithWhereWithoutCategory_activityInput,
    ],
    {
      nullable: true,
    },
  )
  updateMany?:
    | CategoryActivityTypeUpdateManyWithWhereWithoutCategory_activityInput[]
    | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CategoryActivityTypeScalarWhereInput[] | undefined;
}
