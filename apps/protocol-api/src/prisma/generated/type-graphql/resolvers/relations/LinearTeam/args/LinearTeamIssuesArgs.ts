import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearIssueOrderByWithRelationInput } from '../../../inputs/LinearIssueOrderByWithRelationInput';
import { LinearIssueWhereInput } from '../../../inputs/LinearIssueWhereInput';
import { LinearIssueWhereUniqueInput } from '../../../inputs/LinearIssueWhereUniqueInput';
import { LinearIssueScalarFieldEnum } from '../../../../enums/LinearIssueScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class LinearTeamIssuesArgs {
  @TypeGraphQL.Field(_type => LinearIssueWhereInput, {
    nullable: true,
  })
  where?: LinearIssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: LinearIssueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: true,
  })
  cursor?: LinearIssueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | 'id'
        | 'archivedAt'
        | 'autoArchivedAt'
        | 'autoClosedAt'
        | 'boardOrder'
        | 'branchName'
        | 'canceledAt'
        | 'completedAt'
        | 'createdAt'
        | 'customerTickerCount'
        | 'description'
        | 'dueDate'
        | 'estimate'
        | 'linear_id'
        | 'identifier'
        | 'priority'
        | 'priorityLabel'
        | 'snoozedUntilAt'
        | 'sortOrder'
        | 'startedAt'
        | 'subIssueSortOrder'
        | 'title'
        | 'trashed'
        | 'updatedAt'
        | 'url'
        | 'assignee_id'
        | 'creator_id'
        | 'cycle_id'
        | 'project_id'
        | 'team_id'
        | 'contribution_id'
      >
    | undefined;
}
