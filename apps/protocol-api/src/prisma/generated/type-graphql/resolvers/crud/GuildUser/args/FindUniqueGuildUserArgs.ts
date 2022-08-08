import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildUserWhereUniqueInput } from '../../../inputs/GuildUserWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class FindUniqueGuildUserArgs {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildUserWhereUniqueInput;
}
