import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionStatusCreateWithoutContributionsInput } from "../inputs/ContributionStatusCreateWithoutContributionsInput";
import { ContributionStatusWhereUniqueInput } from "../inputs/ContributionStatusWhereUniqueInput";

@TypeGraphQL.InputType("ContributionStatusCreateOrConnectWithoutContributionsInput", {
  isAbstract: true
})
export class ContributionStatusCreateOrConnectWithoutContributionsInput {
  @TypeGraphQL.Field(_type => ContributionStatusWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionStatusCreateWithoutContributionsInput, {
    nullable: false
  })
  create!: ContributionStatusCreateWithoutContributionsInput;
}
