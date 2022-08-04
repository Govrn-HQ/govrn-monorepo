import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserActivityUpdateWithoutUserInput } from '../inputs/UserActivityUpdateWithoutUserInput';
import { UserActivityWhereUniqueInput } from '../inputs/UserActivityWhereUniqueInput';

@TypeGraphQL.InputType('UserActivityUpdateWithWhereUniqueWithoutUserInput', {
  isAbstract: true,
})
export class UserActivityUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: UserActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserActivityUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: UserActivityUpdateWithoutUserInput;
}
