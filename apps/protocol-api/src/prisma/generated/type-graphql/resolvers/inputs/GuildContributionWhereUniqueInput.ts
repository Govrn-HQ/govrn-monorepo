import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildContributionGuild_idContribution_idCompoundUniqueInput } from '../inputs/GuildContributionGuild_idContribution_idCompoundUniqueInput';

@TypeGraphQL.InputType('GuildContributionWhereUniqueInput', {
  isAbstract: true,
})
export class GuildContributionWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field(
    _type => GuildContributionGuild_idContribution_idCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  guild_id_contribution_id?:
    | GuildContributionGuild_idContribution_idCompoundUniqueInput
    | undefined;
}
