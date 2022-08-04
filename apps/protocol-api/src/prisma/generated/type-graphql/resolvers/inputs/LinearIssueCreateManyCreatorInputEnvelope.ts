import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateManyCreatorInput } from '../inputs/LinearIssueCreateManyCreatorInput';

@TypeGraphQL.InputType('LinearIssueCreateManyCreatorInputEnvelope', {
  isAbstract: true,
})
export class LinearIssueCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [LinearIssueCreateManyCreatorInput], {
    nullable: false,
  })
  data!: LinearIssueCreateManyCreatorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
