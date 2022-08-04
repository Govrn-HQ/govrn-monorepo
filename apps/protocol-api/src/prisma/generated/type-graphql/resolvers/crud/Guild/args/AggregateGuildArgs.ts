import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildOrderByWithRelationInput } from '../../../inputs/GuildOrderByWithRelationInput';
import { GuildWhereInput } from '../../../inputs/GuildWhereInput';
import { GuildWhereUniqueInput } from '../../../inputs/GuildWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class AggregateGuildArgs {
  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true,
  })
  where?: GuildWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: GuildOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true,
  })
  cursor?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
