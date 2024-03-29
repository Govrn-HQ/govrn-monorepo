import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionCreateInput } from "../../../inputs/ContributionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContributionArgs {
  @TypeGraphQL.Field(_type => ContributionCreateInput, {
    nullable: false
  })
  data!: ContributionCreateInput;
}
