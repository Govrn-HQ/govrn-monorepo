import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearProjectWhereInput } from '../../../inputs/LinearProjectWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyLinearProjectArgs {
  @TypeGraphQL.Field(_type => LinearProjectWhereInput, {
    nullable: true,
  })
  where?: LinearProjectWhereInput | undefined;
}
