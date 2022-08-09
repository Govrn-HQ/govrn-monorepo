import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearCycleCreateInput } from '../../../inputs/LinearCycleCreateInput';
import { LinearCycleUpdateInput } from '../../../inputs/LinearCycleUpdateInput';
import { LinearCycleWhereUniqueInput } from '../../../inputs/LinearCycleWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertLinearCycleArgs {
  @TypeGraphQL.Field(_type => LinearCycleWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearCycleWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearCycleCreateInput, {
    nullable: false,
  })
  create!: LinearCycleCreateInput;

  @TypeGraphQL.Field(_type => LinearCycleUpdateInput, {
    nullable: false,
  })
  update!: LinearCycleUpdateInput;
}
