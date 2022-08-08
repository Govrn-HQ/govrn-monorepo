import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionStatusWhereInput } from "../../../inputs/ContributionStatusWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyContributionStatusArgs {
  @TypeGraphQL.Field(_type => ContributionStatusWhereInput, {
    nullable: true
  })
  where?: ContributionStatusWhereInput | undefined;
}
