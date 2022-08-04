import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChainTypeCreateOrConnectWithoutUsersInput } from '../inputs/ChainTypeCreateOrConnectWithoutUsersInput';
import { ChainTypeCreateWithoutUsersInput } from '../inputs/ChainTypeCreateWithoutUsersInput';
import { ChainTypeUpdateWithoutUsersInput } from '../inputs/ChainTypeUpdateWithoutUsersInput';
import { ChainTypeUpsertWithoutUsersInput } from '../inputs/ChainTypeUpsertWithoutUsersInput';
import { ChainTypeWhereUniqueInput } from '../inputs/ChainTypeWhereUniqueInput';

@TypeGraphQL.InputType('ChainTypeUpdateOneRequiredWithoutUsersInput', {
  isAbstract: true,
})
export class ChainTypeUpdateOneRequiredWithoutUsersInput {
  @TypeGraphQL.Field(_type => ChainTypeCreateWithoutUsersInput, {
    nullable: true,
  })
  create?: ChainTypeCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeCreateOrConnectWithoutUsersInput, {
    nullable: true,
  })
  connectOrCreate?: ChainTypeCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeUpsertWithoutUsersInput, {
    nullable: true,
  })
  upsert?: ChainTypeUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeWhereUniqueInput, {
    nullable: true,
  })
  connect?: ChainTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeUpdateWithoutUsersInput, {
    nullable: true,
  })
  update?: ChainTypeUpdateWithoutUsersInput | undefined;
}
