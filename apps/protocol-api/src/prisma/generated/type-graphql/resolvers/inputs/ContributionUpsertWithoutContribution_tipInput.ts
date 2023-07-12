import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutContribution_tipInput } from "../inputs/ContributionCreateWithoutContribution_tipInput";
import { ContributionUpdateWithoutContribution_tipInput } from "../inputs/ContributionUpdateWithoutContribution_tipInput";

@TypeGraphQL.InputType("ContributionUpsertWithoutContribution_tipInput", {
  isAbstract: true
})
export class ContributionUpsertWithoutContribution_tipInput {
  @TypeGraphQL.Field(_type => ContributionUpdateWithoutContribution_tipInput, {
    nullable: false
  })
  update!: ContributionUpdateWithoutContribution_tipInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutContribution_tipInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutContribution_tipInput;
}
