import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeCreateManyActivity_typeInputEnvelope } from '../inputs/CategoryActivityTypeCreateManyActivity_typeInputEnvelope';
import { CategoryActivityTypeCreateOrConnectWithoutActivity_typeInput } from '../inputs/CategoryActivityTypeCreateOrConnectWithoutActivity_typeInput';
import { CategoryActivityTypeCreateWithoutActivity_typeInput } from '../inputs/CategoryActivityTypeCreateWithoutActivity_typeInput';
import { CategoryActivityTypeWhereUniqueInput } from '../inputs/CategoryActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType(
  'CategoryActivityTypeCreateNestedManyWithoutActivity_typeInput',
  {
    isAbstract: true,
  },
)
export class CategoryActivityTypeCreateNestedManyWithoutActivity_typeInput {
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
  connect?: CategoryActivityTypeWhereUniqueInput[] | undefined;
}
