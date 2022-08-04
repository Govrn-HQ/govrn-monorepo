import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChainTypeOrderByWithRelationInput } from '../../../inputs/ChainTypeOrderByWithRelationInput';
import { ChainTypeWhereInput } from '../../../inputs/ChainTypeWhereInput';
import { ChainTypeWhereUniqueInput } from '../../../inputs/ChainTypeWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class AggregateChainTypeArgs {
  @TypeGraphQL.Field(_type => ChainTypeWhereInput, {
    nullable: true,
  })
  where?: ChainTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChainTypeOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ChainTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChainTypeWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ChainTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
