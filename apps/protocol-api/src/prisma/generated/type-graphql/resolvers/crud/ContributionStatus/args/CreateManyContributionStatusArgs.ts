import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ContributionStatusCreateManyInput } from '../../../inputs/ContributionStatusCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyContributionStatusArgs {
  @TypeGraphQL.Field(_type => [ContributionStatusCreateManyInput], {
    nullable: false,
  })
  data!: ContributionStatusCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
