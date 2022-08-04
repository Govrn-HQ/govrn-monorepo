import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { LinearIssue } from '../models/LinearIssue';
import { LinearTeamCount } from '../resolvers/outputs/LinearTeamCount';

@TypeGraphQL.ObjectType('LinearTeam', {
  isAbstract: true,
})
export class LinearTeam {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  linear_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  key!: string;

  issues?: LinearIssue[];

  @TypeGraphQL.Field(_type => LinearTeamCount, {
    nullable: true,
  })
  _count?: LinearTeamCount | null;
}
