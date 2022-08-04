import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildContributionWhereInput } from '../inputs/GuildContributionWhereInput';

@TypeGraphQL.InputType('GuildContributionListRelationFilter', {
  isAbstract: true,
})
export class GuildContributionListRelationFilter {
  @TypeGraphQL.Field(_type => GuildContributionWhereInput, {
    nullable: true,
  })
  every?: GuildContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionWhereInput, {
    nullable: true,
  })
  some?: GuildContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionWhereInput, {
    nullable: true,
  })
  none?: GuildContributionWhereInput | undefined;
}
