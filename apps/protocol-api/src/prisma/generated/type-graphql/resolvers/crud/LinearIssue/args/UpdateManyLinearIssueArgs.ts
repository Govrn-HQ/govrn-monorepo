import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearIssueUpdateManyMutationInput } from '../../../inputs/LinearIssueUpdateManyMutationInput';
import { LinearIssueWhereInput } from '../../../inputs/LinearIssueWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyLinearIssueArgs {
  @TypeGraphQL.Field(_type => LinearIssueUpdateManyMutationInput, {
    nullable: false,
  })
  data!: LinearIssueUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LinearIssueWhereInput, {
    nullable: true,
  })
  where?: LinearIssueWhereInput | undefined;
}
