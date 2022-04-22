import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionWhereInput } from "../../../inputs/ContributionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyContributionArgs {
  @TypeGraphQL.Field(_type => ContributionWhereInput, {
    nullable: true
  })
  where?: ContributionWhereInput | undefined;
}
