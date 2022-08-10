import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearCycleCreateInput } from '../../../inputs/LinearCycleCreateInput';

@TypeGraphQL.ArgsType()
export class CreateLinearCycleArgs {
  @TypeGraphQL.Field(_type => LinearCycleCreateInput, {
    nullable: false,
  })
  data!: LinearCycleCreateInput;
}
