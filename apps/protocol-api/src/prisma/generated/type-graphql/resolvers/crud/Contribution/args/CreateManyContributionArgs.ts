import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionCreateManyInput } from "../../../inputs/ContributionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyContributionArgs {
  @TypeGraphQL.Field(_type => [ContributionCreateManyInput], {
    nullable: false
  })
  data!: ContributionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
