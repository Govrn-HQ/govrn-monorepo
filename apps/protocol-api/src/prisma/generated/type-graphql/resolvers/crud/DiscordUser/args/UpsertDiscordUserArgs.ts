import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { DiscordUserCreateInput } from '../../../inputs/DiscordUserCreateInput';
import { DiscordUserUpdateInput } from '../../../inputs/DiscordUserUpdateInput';
import { DiscordUserWhereUniqueInput } from '../../../inputs/DiscordUserWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: false,
  })
  where!: DiscordUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateInput, {
    nullable: false,
  })
  create!: DiscordUserCreateInput;

  @TypeGraphQL.Field(_type => DiscordUserUpdateInput, {
    nullable: false,
  })
  update!: DiscordUserUpdateInput;
}
