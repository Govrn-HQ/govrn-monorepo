import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildActivityTypeOrderByWithRelationInput } from '../../../inputs/GuildActivityTypeOrderByWithRelationInput';
import { GuildActivityTypeWhereInput } from '../../../inputs/GuildActivityTypeWhereInput';
import { GuildActivityTypeWhereUniqueInput } from '../../../inputs/GuildActivityTypeWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class AggregateGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereInput, {
    nullable: true,
  })
  where?: GuildActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: GuildActivityTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: true,
  })
  cursor?: GuildActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
