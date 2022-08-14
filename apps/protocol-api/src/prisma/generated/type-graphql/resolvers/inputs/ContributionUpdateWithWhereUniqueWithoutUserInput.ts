import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionUpdateWithoutUserInput } from "../inputs/ContributionUpdateWithoutUserInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ContributionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ContributionUpdateWithoutUserInput;
}
