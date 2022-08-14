import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutStatusInput } from "../inputs/ContributionCreateWithoutStatusInput";
import { ContributionUpdateWithoutStatusInput } from "../inputs/ContributionUpdateWithoutStatusInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpsertWithWhereUniqueWithoutStatusInput", {
  isAbstract: true
})
export class ContributionUpsertWithWhereUniqueWithoutStatusInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutStatusInput, {
    nullable: false
  })
  update!: ContributionUpdateWithoutStatusInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutStatusInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutStatusInput;
}
