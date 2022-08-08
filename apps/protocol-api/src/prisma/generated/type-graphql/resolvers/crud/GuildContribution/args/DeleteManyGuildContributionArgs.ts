import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { GuildContributionWhereInput } from '../../../inputs/GuildContributionWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyGuildContributionArgs {
  @TypeGraphQL.Field(_type => GuildContributionWhereInput, {
    nullable: true,
  })
  where?: GuildContributionWhereInput | undefined;
}
