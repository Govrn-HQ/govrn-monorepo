import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionUpdateWithoutActivity_typeInput } from '../inputs/ContributionUpdateWithoutActivity_typeInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType(
  'ContributionUpdateWithWhereUniqueWithoutActivity_typeInput',
  {
    isAbstract: true,
  },
)
export class ContributionUpdateWithWhereUniqueWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutActivity_typeInput, {
    nullable: false,
  })
  data!: ContributionUpdateWithoutActivity_typeInput;
}
