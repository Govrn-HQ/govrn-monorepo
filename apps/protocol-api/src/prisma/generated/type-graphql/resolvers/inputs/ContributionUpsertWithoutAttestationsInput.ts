import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutAttestationsInput } from "../inputs/ContributionCreateWithoutAttestationsInput";
import { ContributionUpdateWithoutAttestationsInput } from "../inputs/ContributionUpdateWithoutAttestationsInput";

@TypeGraphQL.InputType("ContributionUpsertWithoutAttestationsInput", {
  isAbstract: true
})
export class ContributionUpsertWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => ContributionUpdateWithoutAttestationsInput, {
    nullable: false
  })
  update!: ContributionUpdateWithoutAttestationsInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutAttestationsInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutAttestationsInput;
}
