import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearIssueWhereInput } from '../../../inputs/LinearIssueWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyLinearIssueArgs {
  @TypeGraphQL.Field(_type => LinearIssueWhereInput, {
    nullable: true,
  })
  where?: LinearIssueWhereInput | undefined;
}
