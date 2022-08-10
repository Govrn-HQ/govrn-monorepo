import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildActivityTypeCreateInput } from '../../../inputs/GuildActivityTypeCreateInput';
import { GuildActivityTypeUpdateInput } from '../../../inputs/GuildActivityTypeUpdateInput';
import { GuildActivityTypeWhereUniqueInput } from '../../../inputs/GuildActivityTypeWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateInput, {
    nullable: false,
  })
  create!: GuildActivityTypeCreateInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateInput, {
    nullable: false,
  })
  update!: GuildActivityTypeUpdateInput;
}
