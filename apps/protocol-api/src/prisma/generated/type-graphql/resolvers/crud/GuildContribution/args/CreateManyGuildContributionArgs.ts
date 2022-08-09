import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildContributionCreateManyInput } from '../../../inputs/GuildContributionCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyGuildContributionArgs {
  @TypeGraphQL.Field(_type => [GuildContributionCreateManyInput], {
    nullable: false,
  })
  data!: GuildContributionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
