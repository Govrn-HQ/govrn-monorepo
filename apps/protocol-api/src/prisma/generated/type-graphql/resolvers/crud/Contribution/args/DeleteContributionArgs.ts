import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ContributionWhereUniqueInput } from '../../../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class DeleteContributionArgs {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: ContributionWhereUniqueInput;
}
