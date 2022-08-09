import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ContributionStatusCreateInput } from '../../../inputs/ContributionStatusCreateInput';

@TypeGraphQL.ArgsType()
export class CreateContributionStatusArgs {
  @TypeGraphQL.Field(_type => ContributionStatusCreateInput, {
    nullable: false,
  })
  data!: ContributionStatusCreateInput;
}
