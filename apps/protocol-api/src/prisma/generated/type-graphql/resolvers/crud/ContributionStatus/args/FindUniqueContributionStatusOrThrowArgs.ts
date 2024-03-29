import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionStatusWhereUniqueInput } from "../../../inputs/ContributionStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueContributionStatusOrThrowArgs {
  @TypeGraphQL.Field(_type => ContributionStatusWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionStatusWhereUniqueInput;
}
