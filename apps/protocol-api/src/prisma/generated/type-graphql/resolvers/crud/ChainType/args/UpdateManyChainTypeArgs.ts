import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChainTypeUpdateManyMutationInput } from '../../../inputs/ChainTypeUpdateManyMutationInput';
import { ChainTypeWhereInput } from '../../../inputs/ChainTypeWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyChainTypeArgs {
  @TypeGraphQL.Field(_type => ChainTypeUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ChainTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChainTypeWhereInput, {
    nullable: true,
  })
  where?: ChainTypeWhereInput | undefined;
}
