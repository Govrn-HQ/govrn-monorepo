import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserActivityScalarWhereInput } from '../inputs/UserActivityScalarWhereInput';
import { UserActivityUpdateManyMutationInput } from '../inputs/UserActivityUpdateManyMutationInput';

@TypeGraphQL.InputType(
  'UserActivityUpdateManyWithWhereWithoutActivity_typeInput',
  {
    isAbstract: true,
  },
)
export class UserActivityUpdateManyWithWhereWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => UserActivityScalarWhereInput, {
    nullable: false,
  })
  where!: UserActivityScalarWhereInput;

  @TypeGraphQL.Field(_type => UserActivityUpdateManyMutationInput, {
    nullable: false,
  })
  data!: UserActivityUpdateManyMutationInput;
}
