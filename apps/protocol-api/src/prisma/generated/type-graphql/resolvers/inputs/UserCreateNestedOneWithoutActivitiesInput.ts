import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutActivitiesInput } from '../inputs/UserCreateOrConnectWithoutActivitiesInput';
import { UserCreateWithoutActivitiesInput } from '../inputs/UserCreateWithoutActivitiesInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateNestedOneWithoutActivitiesInput', {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutActivitiesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutActivitiesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
