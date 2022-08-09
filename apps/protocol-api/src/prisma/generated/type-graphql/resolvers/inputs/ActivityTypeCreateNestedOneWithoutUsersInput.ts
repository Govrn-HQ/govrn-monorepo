import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateOrConnectWithoutUsersInput } from '../inputs/ActivityTypeCreateOrConnectWithoutUsersInput';
import { ActivityTypeCreateWithoutUsersInput } from '../inputs/ActivityTypeCreateWithoutUsersInput';
import { ActivityTypeWhereUniqueInput } from '../inputs/ActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType('ActivityTypeCreateNestedOneWithoutUsersInput', {
  isAbstract: true,
})
export class ActivityTypeCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutUsersInput, {
    nullable: true,
  })
  create?: ActivityTypeCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateOrConnectWithoutUsersInput, {
    nullable: true,
  })
  connectOrCreate?: ActivityTypeCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActivityTypeWhereUniqueInput | undefined;
}
