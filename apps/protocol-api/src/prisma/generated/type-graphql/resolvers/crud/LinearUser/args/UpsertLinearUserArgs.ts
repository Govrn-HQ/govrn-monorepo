import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearUserCreateInput } from '../../../inputs/LinearUserCreateInput';
import { LinearUserUpdateInput } from '../../../inputs/LinearUserUpdateInput';
import { LinearUserWhereUniqueInput } from '../../../inputs/LinearUserWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertLinearUserArgs {
  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearUserCreateInput, {
    nullable: false,
  })
  create!: LinearUserCreateInput;

  @TypeGraphQL.Field(_type => LinearUserUpdateInput, {
    nullable: false,
  })
  update!: LinearUserUpdateInput;
}
