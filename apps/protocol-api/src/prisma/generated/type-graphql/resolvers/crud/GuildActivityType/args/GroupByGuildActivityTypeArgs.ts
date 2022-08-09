import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildActivityTypeOrderByWithAggregationInput } from '../../../inputs/GuildActivityTypeOrderByWithAggregationInput';
import { GuildActivityTypeScalarWhereWithAggregatesInput } from '../../../inputs/GuildActivityTypeScalarWhereWithAggregatesInput';
import { GuildActivityTypeWhereInput } from '../../../inputs/GuildActivityTypeWhereInput';
import { GuildActivityTypeScalarFieldEnum } from '../../../../enums/GuildActivityTypeScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class GroupByGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereInput, {
    nullable: true,
  })
  where?: GuildActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: GuildActivityTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    'id' | 'createdAt' | 'updatedAt' | 'guild_id' | 'activity_type_id'
  >;

  @TypeGraphQL.Field(_type => GuildActivityTypeScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: GuildActivityTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
