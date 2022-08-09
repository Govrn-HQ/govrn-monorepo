import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildActivityTypeCreateManyInput } from '../../../inputs/GuildActivityTypeCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateManyInput], {
    nullable: false,
  })
  data!: GuildActivityTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
