import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueAvgAggregate } from '../outputs/LinearIssueAvgAggregate';
import { LinearIssueCountAggregate } from '../outputs/LinearIssueCountAggregate';
import { LinearIssueMaxAggregate } from '../outputs/LinearIssueMaxAggregate';
import { LinearIssueMinAggregate } from '../outputs/LinearIssueMinAggregate';
import { LinearIssueSumAggregate } from '../outputs/LinearIssueSumAggregate';

@TypeGraphQL.ObjectType('AggregateLinearIssue', {
  isAbstract: true,
})
export class AggregateLinearIssue {
  @TypeGraphQL.Field(_type => LinearIssueCountAggregate, {
    nullable: true,
  })
  _count!: LinearIssueCountAggregate | null;

  @TypeGraphQL.Field(_type => LinearIssueAvgAggregate, {
    nullable: true,
  })
  _avg!: LinearIssueAvgAggregate | null;

  @TypeGraphQL.Field(_type => LinearIssueSumAggregate, {
    nullable: true,
  })
  _sum!: LinearIssueSumAggregate | null;

  @TypeGraphQL.Field(_type => LinearIssueMinAggregate, {
    nullable: true,
  })
  _min!: LinearIssueMinAggregate | null;

  @TypeGraphQL.Field(_type => LinearIssueMaxAggregate, {
    nullable: true,
  })
  _max!: LinearIssueMaxAggregate | null;
}
