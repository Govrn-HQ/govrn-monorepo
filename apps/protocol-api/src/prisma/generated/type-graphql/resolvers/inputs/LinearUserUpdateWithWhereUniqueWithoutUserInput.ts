import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearUserUpdateWithoutUserInput } from '../inputs/LinearUserUpdateWithoutUserInput';
import { LinearUserWhereUniqueInput } from '../inputs/LinearUserWhereUniqueInput';

@TypeGraphQL.InputType('LinearUserUpdateWithWhereUniqueWithoutUserInput', {
  isAbstract: true,
})
export class LinearUserUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearUserUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: LinearUserUpdateWithoutUserInput;
}
