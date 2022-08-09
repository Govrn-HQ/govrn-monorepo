import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateOrConnectWithoutAttestationsInput } from '../inputs/ContributionCreateOrConnectWithoutAttestationsInput';
import { ContributionCreateWithoutAttestationsInput } from '../inputs/ContributionCreateWithoutAttestationsInput';
import { ContributionUpdateWithoutAttestationsInput } from '../inputs/ContributionUpdateWithoutAttestationsInput';
import { ContributionUpsertWithoutAttestationsInput } from '../inputs/ContributionUpsertWithoutAttestationsInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType(
  'ContributionUpdateOneRequiredWithoutAttestationsInput',
  {
    isAbstract: true,
  },
)
export class ContributionUpdateOneRequiredWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutAttestationsInput, {
    nullable: true,
  })
  create?: ContributionCreateWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(
    _type => ContributionCreateOrConnectWithoutAttestationsInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | ContributionCreateOrConnectWithoutAttestationsInput
    | undefined;

  @TypeGraphQL.Field(_type => ContributionUpsertWithoutAttestationsInput, {
    nullable: true,
  })
  upsert?: ContributionUpsertWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true,
  })
  connect?: ContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutAttestationsInput, {
    nullable: true,
  })
  update?: ContributionUpdateWithoutAttestationsInput | undefined;
}
