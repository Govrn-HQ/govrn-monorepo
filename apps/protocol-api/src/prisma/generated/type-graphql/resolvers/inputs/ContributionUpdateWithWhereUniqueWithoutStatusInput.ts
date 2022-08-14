import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionUpdateWithoutStatusInput } from "../inputs/ContributionUpdateWithoutStatusInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpdateWithWhereUniqueWithoutStatusInput", {
  isAbstract: true
})
export class ContributionUpdateWithWhereUniqueWithoutStatusInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutStatusInput, {
    nullable: false
  })
  data!: ContributionUpdateWithoutStatusInput;
}
