import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionUpdateManyMutationInput } from "../../../inputs/ContributionUpdateManyMutationInput";
import { ContributionWhereInput } from "../../../inputs/ContributionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContributionArgs {
  @TypeGraphQL.Field(_type => ContributionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContributionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContributionWhereInput, {
    nullable: true
  })
  where?: ContributionWhereInput | undefined;
}
