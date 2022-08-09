import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildContributionCreateInput } from '../../../inputs/GuildContributionCreateInput';

@TypeGraphQL.ArgsType()
export class CreateGuildContributionArgs {
  @TypeGraphQL.Field(_type => GuildContributionCreateInput, {
    nullable: false,
  })
  data!: GuildContributionCreateInput;
}
