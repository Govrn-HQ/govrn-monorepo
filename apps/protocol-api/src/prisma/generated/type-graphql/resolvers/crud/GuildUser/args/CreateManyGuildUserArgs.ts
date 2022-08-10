import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildUserCreateManyInput } from '../../../inputs/GuildUserCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyGuildUserArgs {
  @TypeGraphQL.Field(_type => [GuildUserCreateManyInput], {
    nullable: false,
  })
  data!: GuildUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
