import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutActivitiesInput } from '../inputs/UserCreateOrConnectWithoutActivitiesInput';
import { UserCreateWithoutActivitiesInput } from '../inputs/UserCreateWithoutActivitiesInput';
import { UserUpdateWithoutActivitiesInput } from '../inputs/UserUpdateWithoutActivitiesInput';
import { UserUpsertWithoutActivitiesInput } from '../inputs/UserUpsertWithoutActivitiesInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserUpdateOneRequiredWithoutActivitiesInput', {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutActivitiesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutActivitiesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutActivitiesInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutActivitiesInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutActivitiesInput | undefined;
}
