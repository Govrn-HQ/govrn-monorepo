import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateManyCreatorInputEnvelope } from '../inputs/LinearIssueCreateManyCreatorInputEnvelope';
import { LinearIssueCreateOrConnectWithoutCreatorInput } from '../inputs/LinearIssueCreateOrConnectWithoutCreatorInput';
import { LinearIssueCreateWithoutCreatorInput } from '../inputs/LinearIssueCreateWithoutCreatorInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueCreateNestedManyWithoutCreatorInput', {
  isAbstract: true,
})
export class LinearIssueCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [LinearIssueCreateWithoutCreatorInput], {
    nullable: true,
  })
  create?: LinearIssueCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueCreateOrConnectWithoutCreatorInput], {
    nullable: true,
  })
  connectOrCreate?: LinearIssueCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateManyCreatorInputEnvelope, {
    nullable: true,
  })
  createMany?: LinearIssueCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true,
  })
  connect?: LinearIssueWhereUniqueInput[] | undefined;
}
