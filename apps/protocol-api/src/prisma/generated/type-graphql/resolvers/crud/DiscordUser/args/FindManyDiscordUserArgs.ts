import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { DiscordUserOrderByWithRelationInput } from '../../../inputs/DiscordUserOrderByWithRelationInput';
import { DiscordUserWhereInput } from '../../../inputs/DiscordUserWhereInput';
import { DiscordUserWhereUniqueInput } from '../../../inputs/DiscordUserWhereUniqueInput';
import { DiscordUserScalarFieldEnum } from '../../../../enums/DiscordUserScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class FindManyDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true,
  })
  where?: DiscordUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: DiscordUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: true,
  })
  cursor?: DiscordUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | 'id'
        | 'createdAt'
        | 'updatedAt'
        | 'display_name'
        | 'discord_id'
        | 'user_id'
      >
    | undefined;
}
