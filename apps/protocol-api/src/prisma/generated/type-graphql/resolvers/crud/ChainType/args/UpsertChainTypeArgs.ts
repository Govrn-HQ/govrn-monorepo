import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChainTypeCreateInput } from '../../../inputs/ChainTypeCreateInput';
import { ChainTypeUpdateInput } from '../../../inputs/ChainTypeUpdateInput';
import { ChainTypeWhereUniqueInput } from '../../../inputs/ChainTypeWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertChainTypeArgs {
  @TypeGraphQL.Field(_type => ChainTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: ChainTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChainTypeCreateInput, {
    nullable: false,
  })
  create!: ChainTypeCreateInput;

  @TypeGraphQL.Field(_type => ChainTypeUpdateInput, {
    nullable: false,
  })
  update!: ChainTypeUpdateInput;
}
