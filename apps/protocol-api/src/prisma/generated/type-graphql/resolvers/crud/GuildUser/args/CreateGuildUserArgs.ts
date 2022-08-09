import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildUserCreateInput } from '../../../inputs/GuildUserCreateInput';

@TypeGraphQL.ArgsType()
export class CreateGuildUserArgs {
  @TypeGraphQL.Field(_type => GuildUserCreateInput, {
    nullable: false,
  })
  data!: GuildUserCreateInput;
}
