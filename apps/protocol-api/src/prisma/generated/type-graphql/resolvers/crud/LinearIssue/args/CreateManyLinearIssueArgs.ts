import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearIssueCreateManyInput } from '../../../inputs/LinearIssueCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyLinearIssueArgs {
  @TypeGraphQL.Field(_type => [LinearIssueCreateManyInput], {
    nullable: false,
  })
  data!: LinearIssueCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
