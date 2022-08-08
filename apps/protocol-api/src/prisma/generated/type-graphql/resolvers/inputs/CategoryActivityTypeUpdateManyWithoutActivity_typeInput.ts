import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeCreateManyActivity_typeInputEnvelope } from '../inputs/CategoryActivityTypeCreateManyActivity_typeInputEnvelope';
import { CategoryActivityTypeCreateOrConnectWithoutActivity_typeInput } from '../inputs/CategoryActivityTypeCreateOrConnectWithoutActivity_typeInput';
import { CategoryActivityTypeCreateWithoutActivity_typeInput } from '../inputs/CategoryActivityTypeCreateWithoutActivity_typeInput';
import { CategoryActivityTypeScalarWhereInput } from '../inputs/CategoryActivityTypeScalarWhereInput';
import { CategoryActivityTypeUpdateManyWithWhereWithoutActivity_typeInput } from '../inputs/CategoryActivityTypeUpdateManyWithWhereWithoutActivity_typeInput';
import { CategoryActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput } from '../inputs/CategoryActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput';
import { CategoryActivityTypeUpsertWithWhereUniqueWithoutActivity_typeInput } from '../inputs/CategoryActivityTypeUpsertWithWhereUniqueWithoutActivity_typeInput';
import { CategoryActivityTypeWhereUniqueInput } from '../inputs/CategoryActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'CategoryActivityTypeUpdateManyWithoutActivity_typeInput',
  {
    isAbstract: true,
  },
)
export class CategoryActivityTypeUpdateManyWithoutActivity_typeInput {
  @TypeGraphQL.Field(
    _type => [CategoryActivityTypeCreateWithoutActivity_typeInput],
    {
      nullable: true,
    },
  )
  create?: CategoryActivityTypeCreateWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [CategoryActivityTypeCreateOrConnectWithoutActivity_typeInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | CategoryActivityTypeCreateOrConnectWithoutActivity_typeInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [
      CategoryActivityTypeUpsertWithWhereUniqueWithoutActivity_typeInput,
    ],
    {
      nullable: true,
    },
  )
  upsert?:
    | CategoryActivityTypeUpsertWithWhereUniqueWithoutActivity_typeInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => CategoryActivityTypeCreateManyActivity_typeInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?:
    | CategoryActivityTypeCreateManyActivity_typeInputEnvelope
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
      CategoryActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput,
    ],
    {
      nullable: true,
    },
  )
  update?:
    | CategoryActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [CategoryActivityTypeUpdateManyWithWhereWithoutActivity_typeInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | CategoryActivityTypeUpdateManyWithWhereWithoutActivity_typeInput[]
    | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CategoryActivityTypeScalarWhereInput[] | undefined;
}
