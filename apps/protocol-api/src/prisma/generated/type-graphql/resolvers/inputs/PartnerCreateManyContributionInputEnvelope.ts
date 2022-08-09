import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PartnerCreateManyContributionInput } from '../inputs/PartnerCreateManyContributionInput';

@TypeGraphQL.InputType('PartnerCreateManyContributionInputEnvelope', {
  isAbstract: true,
})
export class PartnerCreateManyContributionInputEnvelope {
  @TypeGraphQL.Field(_type => [PartnerCreateManyContributionInput], {
    nullable: false,
  })
  data!: PartnerCreateManyContributionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
