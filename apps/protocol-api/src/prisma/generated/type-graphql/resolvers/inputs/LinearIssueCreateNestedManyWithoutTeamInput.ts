import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateManyTeamInputEnvelope } from '../inputs/LinearIssueCreateManyTeamInputEnvelope';
import { LinearIssueCreateOrConnectWithoutTeamInput } from '../inputs/LinearIssueCreateOrConnectWithoutTeamInput';
import { LinearIssueCreateWithoutTeamInput } from '../inputs/LinearIssueCreateWithoutTeamInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueCreateNestedManyWithoutTeamInput', {
  isAbstract: true,
})
export class LinearIssueCreateNestedManyWithoutTeamInput {
  @TypeGraphQL.Field(_type => [LinearIssueCreateWithoutTeamInput], {
    nullable: true,
  })
  create?: LinearIssueCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueCreateOrConnectWithoutTeamInput], {
    nullable: true,
  })
  connectOrCreate?: LinearIssueCreateOrConnectWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateManyTeamInputEnvelope, {
    nullable: true,
  })
  createMany?: LinearIssueCreateManyTeamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true,
  })
  connect?: LinearIssueWhereUniqueInput[] | undefined;
}
