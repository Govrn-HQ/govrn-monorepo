import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ContributionCreateInput } from '../../../inputs/ContributionCreateInput';
import { ContributionUpdateInput } from '../../../inputs/ContributionUpdateInput';
import { ContributionWhereUniqueInput } from '../../../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertContributionArgs {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateInput, {
    nullable: false,
  })
  create!: ContributionCreateInput;

  @TypeGraphQL.Field(_type => ContributionUpdateInput, {
    nullable: false,
  })
  update!: ContributionUpdateInput;
}
