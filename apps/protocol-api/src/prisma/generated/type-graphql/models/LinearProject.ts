import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { LinearIssue } from '../models/LinearIssue';
import { LinearProjectCount } from '../resolvers/outputs/LinearProjectCount';

@TypeGraphQL.ObjectType('LinearProject', {
  isAbstract: true,
})
export class LinearProject {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  linear_id!: string;

  issues?: LinearIssue[];

  @TypeGraphQL.Field(_type => LinearProjectCount, {
    nullable: true,
  })
  _count?: LinearProjectCount | null;
}
