import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildContributionOrderByWithRelationInput } from '../../../inputs/GuildContributionOrderByWithRelationInput';
import { GuildContributionWhereInput } from '../../../inputs/GuildContributionWhereInput';
import { GuildContributionWhereUniqueInput } from '../../../inputs/GuildContributionWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class AggregateGuildContributionArgs {
  @TypeGraphQL.Field(_type => GuildContributionWhereInput, {
    nullable: true,
  })
  where?: GuildContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: GuildContributionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: true,
  })
  cursor?: GuildContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
