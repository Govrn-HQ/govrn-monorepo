import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionStatusUpdateInput } from "../../../inputs/ContributionStatusUpdateInput";
import { ContributionStatusWhereUniqueInput } from "../../../inputs/ContributionStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContributionStatusArgs {
  @TypeGraphQL.Field(_type => ContributionStatusUpdateInput, {
    nullable: false
  })
  data!: ContributionStatusUpdateInput;

  @TypeGraphQL.Field(_type => ContributionStatusWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionStatusWhereUniqueInput;
}
