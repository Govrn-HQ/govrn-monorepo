import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionStatusCreateInput } from "../../../inputs/ContributionStatusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContributionStatusArgs {
  @TypeGraphQL.Field(_type => ContributionStatusCreateInput, {
    nullable: false
  })
  data!: ContributionStatusCreateInput;
}
