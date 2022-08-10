import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearUserUpdateInput } from '../../../inputs/LinearUserUpdateInput';
import { LinearUserWhereUniqueInput } from '../../../inputs/LinearUserWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpdateLinearUserArgs {
  @TypeGraphQL.Field(_type => LinearUserUpdateInput, {
    nullable: false,
  })
  data!: LinearUserUpdateInput;

  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearUserWhereUniqueInput;
}
