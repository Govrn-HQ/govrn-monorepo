import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutActivity_typeInput } from "../inputs/ContributionCreateWithoutActivity_typeInput";
import { ContributionUpdateWithoutActivity_typeInput } from "../inputs/ContributionUpdateWithoutActivity_typeInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpsertWithWhereUniqueWithoutActivity_typeInput", {
  isAbstract: true
})
export class ContributionUpsertWithWhereUniqueWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutActivity_typeInput, {
    nullable: false
  })
  update!: ContributionUpdateWithoutActivity_typeInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutActivity_typeInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutActivity_typeInput;
}
