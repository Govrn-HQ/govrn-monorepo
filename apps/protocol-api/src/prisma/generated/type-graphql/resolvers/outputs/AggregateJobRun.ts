import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { JobRunAvgAggregate } from '../outputs/JobRunAvgAggregate';
import { JobRunCountAggregate } from '../outputs/JobRunCountAggregate';
import { JobRunMaxAggregate } from '../outputs/JobRunMaxAggregate';
import { JobRunMinAggregate } from '../outputs/JobRunMinAggregate';
import { JobRunSumAggregate } from '../outputs/JobRunSumAggregate';

@TypeGraphQL.ObjectType('AggregateJobRun', {
  isAbstract: true,
})
export class AggregateJobRun {
  @TypeGraphQL.Field(_type => JobRunCountAggregate, {
    nullable: true,
  })
  _count!: JobRunCountAggregate | null;

  @TypeGraphQL.Field(_type => JobRunAvgAggregate, {
    nullable: true,
  })
  _avg!: JobRunAvgAggregate | null;

  @TypeGraphQL.Field(_type => JobRunSumAggregate, {
    nullable: true,
  })
  _sum!: JobRunSumAggregate | null;

  @TypeGraphQL.Field(_type => JobRunMinAggregate, {
    nullable: true,
  })
  _min!: JobRunMinAggregate | null;

  @TypeGraphQL.Field(_type => JobRunMaxAggregate, {
    nullable: true,
  })
  _max!: JobRunMaxAggregate | null;
}
