import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChainTypeCreateWithoutUsersInput } from '../inputs/ChainTypeCreateWithoutUsersInput';
import { ChainTypeUpdateWithoutUsersInput } from '../inputs/ChainTypeUpdateWithoutUsersInput';

@TypeGraphQL.InputType('ChainTypeUpsertWithoutUsersInput', {
  isAbstract: true,
})
export class ChainTypeUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => ChainTypeUpdateWithoutUsersInput, {
    nullable: false,
  })
  update!: ChainTypeUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => ChainTypeCreateWithoutUsersInput, {
    nullable: false,
  })
  create!: ChainTypeCreateWithoutUsersInput;
}
