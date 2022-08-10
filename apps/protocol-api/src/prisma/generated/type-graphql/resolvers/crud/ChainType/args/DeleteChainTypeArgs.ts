import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChainTypeWhereUniqueInput } from '../../../inputs/ChainTypeWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class DeleteChainTypeArgs {
  @TypeGraphQL.Field(_type => ChainTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: ChainTypeWhereUniqueInput;
}
