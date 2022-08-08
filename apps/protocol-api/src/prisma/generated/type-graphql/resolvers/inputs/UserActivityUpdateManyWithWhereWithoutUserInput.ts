import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserActivityScalarWhereInput } from '../inputs/UserActivityScalarWhereInput';
import { UserActivityUpdateManyMutationInput } from '../inputs/UserActivityUpdateManyMutationInput';

@TypeGraphQL.InputType('UserActivityUpdateManyWithWhereWithoutUserInput', {
  isAbstract: true,
})
export class UserActivityUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UserActivityScalarWhereInput, {
    nullable: false,
  })
  where!: UserActivityScalarWhereInput;

  @TypeGraphQL.Field(_type => UserActivityUpdateManyMutationInput, {
    nullable: false,
  })
  data!: UserActivityUpdateManyMutationInput;
}
