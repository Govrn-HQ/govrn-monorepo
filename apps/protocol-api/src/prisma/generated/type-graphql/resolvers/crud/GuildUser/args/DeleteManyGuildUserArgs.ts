import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildUserWhereInput } from '../../../inputs/GuildUserWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyGuildUserArgs {
  @TypeGraphQL.Field(_type => GuildUserWhereInput, {
    nullable: true,
  })
  where?: GuildUserWhereInput | undefined;
}
