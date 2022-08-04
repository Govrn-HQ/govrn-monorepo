import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateManyAssigneeInput } from '../inputs/LinearIssueCreateManyAssigneeInput';

@TypeGraphQL.InputType('LinearIssueCreateManyAssigneeInputEnvelope', {
  isAbstract: true,
})
export class LinearIssueCreateManyAssigneeInputEnvelope {
  @TypeGraphQL.Field(_type => [LinearIssueCreateManyAssigneeInput], {
    nullable: false,
  })
  data!: LinearIssueCreateManyAssigneeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
