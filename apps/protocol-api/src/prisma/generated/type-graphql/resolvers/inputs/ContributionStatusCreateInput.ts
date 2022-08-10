import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateNestedManyWithoutStatusInput } from '../inputs/ContributionCreateNestedManyWithoutStatusInput';

@TypeGraphQL.InputType('ContributionStatusCreateInput', {
  isAbstract: true,
})
export class ContributionStatusCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => ContributionCreateNestedManyWithoutStatusInput, {
    nullable: true,
  })
  contributions?: ContributionCreateNestedManyWithoutStatusInput | undefined;
}
