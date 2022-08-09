import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildCreateManyInput } from '../../../inputs/GuildCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyGuildArgs {
  @TypeGraphQL.Field(_type => [GuildCreateManyInput], {
    nullable: false,
  })
  data!: GuildCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
