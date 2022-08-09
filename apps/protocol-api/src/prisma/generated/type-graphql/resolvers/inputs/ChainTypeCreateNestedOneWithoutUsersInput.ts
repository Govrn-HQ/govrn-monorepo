import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChainTypeCreateOrConnectWithoutUsersInput } from '../inputs/ChainTypeCreateOrConnectWithoutUsersInput';
import { ChainTypeCreateWithoutUsersInput } from '../inputs/ChainTypeCreateWithoutUsersInput';
import { ChainTypeWhereUniqueInput } from '../inputs/ChainTypeWhereUniqueInput';

@TypeGraphQL.InputType('ChainTypeCreateNestedOneWithoutUsersInput', {
  isAbstract: true,
})
export class ChainTypeCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => ChainTypeCreateWithoutUsersInput, {
    nullable: true,
  })
  create?: ChainTypeCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeCreateOrConnectWithoutUsersInput, {
    nullable: true,
  })
  connectOrCreate?: ChainTypeCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeWhereUniqueInput, {
    nullable: true,
  })
  connect?: ChainTypeWhereUniqueInput | undefined;
}
