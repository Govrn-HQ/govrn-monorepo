import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearCycleWhereInput } from '../../../inputs/LinearCycleWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyLinearCycleArgs {
  @TypeGraphQL.Field(_type => LinearCycleWhereInput, {
    nullable: true,
  })
  where?: LinearCycleWhereInput | undefined;
}
