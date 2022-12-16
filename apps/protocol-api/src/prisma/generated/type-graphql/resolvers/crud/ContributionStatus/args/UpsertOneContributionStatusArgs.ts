import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionStatusCreateInput } from "../../../inputs/ContributionStatusCreateInput";
import { ContributionStatusUpdateInput } from "../../../inputs/ContributionStatusUpdateInput";
import { ContributionStatusWhereUniqueInput } from "../../../inputs/ContributionStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContributionStatusArgs {
  @TypeGraphQL.Field(_type => ContributionStatusWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionStatusCreateInput, {
    nullable: false
  })
  create!: ContributionStatusCreateInput;

  @TypeGraphQL.Field(_type => ContributionStatusUpdateInput, {
    nullable: false
  })
  update!: ContributionStatusUpdateInput;
}
