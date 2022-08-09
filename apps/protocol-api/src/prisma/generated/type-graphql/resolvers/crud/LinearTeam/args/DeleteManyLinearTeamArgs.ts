import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearTeamWhereInput } from '../../../inputs/LinearTeamWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyLinearTeamArgs {
  @TypeGraphQL.Field(_type => LinearTeamWhereInput, {
    nullable: true,
  })
  where?: LinearTeamWhereInput | undefined;
}
