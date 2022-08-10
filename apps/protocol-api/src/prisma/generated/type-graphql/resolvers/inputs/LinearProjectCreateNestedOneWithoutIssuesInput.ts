import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearProjectCreateOrConnectWithoutIssuesInput } from '../inputs/LinearProjectCreateOrConnectWithoutIssuesInput';
import { LinearProjectCreateWithoutIssuesInput } from '../inputs/LinearProjectCreateWithoutIssuesInput';
import { LinearProjectWhereUniqueInput } from '../inputs/LinearProjectWhereUniqueInput';

@TypeGraphQL.InputType('LinearProjectCreateNestedOneWithoutIssuesInput', {
  isAbstract: true,
})
export class LinearProjectCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearProjectCreateWithoutIssuesInput, {
    nullable: true,
  })
  create?: LinearProjectCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearProjectCreateOrConnectWithoutIssuesInput, {
    nullable: true,
  })
  connectOrCreate?: LinearProjectCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearProjectWhereUniqueInput, {
    nullable: true,
  })
  connect?: LinearProjectWhereUniqueInput | undefined;
}
