import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeCreateManyCategory_activityInputEnvelope } from '../inputs/CategoryActivityTypeCreateManyCategory_activityInputEnvelope';
import { CategoryActivityTypeCreateOrConnectWithoutCategory_activityInput } from '../inputs/CategoryActivityTypeCreateOrConnectWithoutCategory_activityInput';
import { CategoryActivityTypeCreateWithoutCategory_activityInput } from '../inputs/CategoryActivityTypeCreateWithoutCategory_activityInput';
import { CategoryActivityTypeWhereUniqueInput } from '../inputs/CategoryActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'CategoryActivityTypeCreateNestedManyWithoutCategory_activityInput',
  {
    isAbstract: true,
  },
)
export class CategoryActivityTypeCreateNestedManyWithoutCategory_activityInput {
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
  connect?: CategoryActivityTypeWhereUniqueInput[] | undefined;
}
