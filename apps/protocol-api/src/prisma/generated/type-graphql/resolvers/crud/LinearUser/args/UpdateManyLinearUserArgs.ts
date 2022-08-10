import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearUserUpdateManyMutationInput } from '../../../inputs/LinearUserUpdateManyMutationInput';
import { LinearUserWhereInput } from '../../../inputs/LinearUserWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyLinearUserArgs {
  @TypeGraphQL.Field(_type => LinearUserUpdateManyMutationInput, {
    nullable: false,
  })
  data!: LinearUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LinearUserWhereInput, {
    nullable: true,
  })
  where?: LinearUserWhereInput | undefined;
}
