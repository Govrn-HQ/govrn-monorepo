import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { DiscordUserUpdateManyMutationInput } from '../../../inputs/DiscordUserUpdateManyMutationInput';
import { DiscordUserWhereInput } from '../../../inputs/DiscordUserWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserUpdateManyMutationInput, {
    nullable: false,
  })
  data!: DiscordUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true,
  })
  where?: DiscordUserWhereInput | undefined;
}
