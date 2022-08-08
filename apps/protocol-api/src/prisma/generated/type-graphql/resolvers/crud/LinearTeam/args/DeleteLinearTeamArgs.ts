import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearTeamWhereUniqueInput } from '../../../inputs/LinearTeamWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class DeleteLinearTeamArgs {
  @TypeGraphQL.Field(_type => LinearTeamWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearTeamWhereUniqueInput;
}
