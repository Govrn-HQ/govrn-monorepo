import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutContribution_tipInput } from "../inputs/ContributionCreateWithoutContribution_tipInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateOrConnectWithoutContribution_tipInput", {
  isAbstract: true
})
export class ContributionCreateOrConnectWithoutContribution_tipInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutContribution_tipInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutContribution_tipInput;
}
