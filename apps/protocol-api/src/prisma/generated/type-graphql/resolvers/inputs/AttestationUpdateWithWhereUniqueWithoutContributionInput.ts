import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationUpdateWithoutContributionInput } from '../inputs/AttestationUpdateWithoutContributionInput';
import { AttestationWhereUniqueInput } from '../inputs/AttestationWhereUniqueInput';

@TypeGraphQL.InputType(
  'AttestationUpdateWithWhereUniqueWithoutContributionInput',
  {
    isAbstract: true,
  },
)
export class AttestationUpdateWithWhereUniqueWithoutContributionInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false,
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationUpdateWithoutContributionInput, {
    nullable: false,
  })
  data!: AttestationUpdateWithoutContributionInput;
}
