import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionUpdateInput } from "../../../inputs/ContributionUpdateInput";
import { ContributionWhereUniqueInput } from "../../../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateContributionArgs {
  @TypeGraphQL.Field(_type => ContributionUpdateInput, {
    nullable: false
  })
  data!: ContributionUpdateInput;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;
}
