import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutContributionPartnersInput } from '../inputs/UserCreateOrConnectWithoutContributionPartnersInput';
import { UserCreateWithoutContributionPartnersInput } from '../inputs/UserCreateWithoutContributionPartnersInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateNestedOneWithoutContributionPartnersInput', {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutContributionPartnersInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutContributionPartnersInput, {
    nullable: true,
  })
  create?: UserCreateWithoutContributionPartnersInput | undefined;

  @TypeGraphQL.Field(
    _type => UserCreateOrConnectWithoutContributionPartnersInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | UserCreateOrConnectWithoutContributionPartnersInput
    | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
