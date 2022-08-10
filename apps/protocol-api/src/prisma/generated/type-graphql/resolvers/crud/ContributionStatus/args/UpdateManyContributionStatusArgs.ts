import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionStatusUpdateManyMutationInput } from "../../../inputs/ContributionStatusUpdateManyMutationInput";
import { ContributionStatusWhereInput } from "../../../inputs/ContributionStatusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContributionStatusArgs {
  @TypeGraphQL.Field(_type => ContributionStatusUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContributionStatusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContributionStatusWhereInput, {
    nullable: true
  })
  where?: ContributionStatusWhereInput | undefined;
}
