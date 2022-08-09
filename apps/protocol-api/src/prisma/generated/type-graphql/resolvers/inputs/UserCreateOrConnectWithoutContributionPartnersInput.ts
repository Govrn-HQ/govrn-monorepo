import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutContributionPartnersInput } from '../inputs/UserCreateWithoutContributionPartnersInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateOrConnectWithoutContributionPartnersInput', {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutContributionPartnersInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutContributionPartnersInput, {
    nullable: false,
  })
  create!: UserCreateWithoutContributionPartnersInput;
}
