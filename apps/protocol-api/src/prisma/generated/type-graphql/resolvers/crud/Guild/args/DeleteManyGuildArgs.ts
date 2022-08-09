import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildWhereInput } from '../../../inputs/GuildWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyGuildArgs {
  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true,
  })
  where?: GuildWhereInput | undefined;
}
