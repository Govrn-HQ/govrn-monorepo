import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildWhereUniqueInput } from '../../../inputs/GuildWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class FindUniqueGuildArgs {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false,
  })
  where!: GuildWhereUniqueInput;
}
