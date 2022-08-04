import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearProjectCreateInput } from '../../../inputs/LinearProjectCreateInput';
import { LinearProjectUpdateInput } from '../../../inputs/LinearProjectUpdateInput';
import { LinearProjectWhereUniqueInput } from '../../../inputs/LinearProjectWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertLinearProjectArgs {
  @TypeGraphQL.Field(_type => LinearProjectWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearProjectCreateInput, {
    nullable: false,
  })
  create!: LinearProjectCreateInput;

  @TypeGraphQL.Field(_type => LinearProjectUpdateInput, {
    nullable: false,
  })
  update!: LinearProjectUpdateInput;
}
