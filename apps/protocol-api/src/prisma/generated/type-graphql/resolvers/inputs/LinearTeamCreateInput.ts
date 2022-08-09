import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateNestedManyWithoutTeamInput } from '../inputs/LinearIssueCreateNestedManyWithoutTeamInput';

@TypeGraphQL.InputType('LinearTeamCreateInput', {
  isAbstract: true,
})
export class LinearTeamCreateInput {
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

  @TypeGraphQL.Field(_type => LinearIssueCreateNestedManyWithoutTeamInput, {
    nullable: true,
  })
  issues?: LinearIssueCreateNestedManyWithoutTeamInput | undefined;
}
