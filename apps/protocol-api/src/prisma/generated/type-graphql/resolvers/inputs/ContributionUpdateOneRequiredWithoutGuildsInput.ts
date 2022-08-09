import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateOrConnectWithoutGuildsInput } from '../inputs/ContributionCreateOrConnectWithoutGuildsInput';
import { ContributionCreateWithoutGuildsInput } from '../inputs/ContributionCreateWithoutGuildsInput';
import { ContributionUpdateWithoutGuildsInput } from '../inputs/ContributionUpdateWithoutGuildsInput';
import { ContributionUpsertWithoutGuildsInput } from '../inputs/ContributionUpsertWithoutGuildsInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionUpdateOneRequiredWithoutGuildsInput', {
  isAbstract: true,
})
export class ContributionUpdateOneRequiredWithoutGuildsInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutGuildsInput, {
    nullable: true,
  })
  create?: ContributionCreateWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateOrConnectWithoutGuildsInput, {
    nullable: true,
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpsertWithoutGuildsInput, {
    nullable: true,
  })
  upsert?: ContributionUpsertWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true,
  })
  connect?: ContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutGuildsInput, {
    nullable: true,
  })
  update?: ContributionUpdateWithoutGuildsInput | undefined;
}
